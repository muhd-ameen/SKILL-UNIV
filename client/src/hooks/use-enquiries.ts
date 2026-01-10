import { useMutation } from "@tanstack/react-query";
import { api, type InsertEnquiry } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useCreateEnquiry() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertEnquiry) => {
      const validated = api.enquiries.create.input.parse(data);
      const res = await fetch(api.enquiries.create.path, {
        method: api.enquiries.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = api.enquiries.create.responses[400].parse(await res.json());
          throw new Error(error.message);
        }
        throw new Error("Failed to submit enquiry");
      }
      return api.enquiries.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Enquiry Sent",
        description: "We'll be in touch with you shortly.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
