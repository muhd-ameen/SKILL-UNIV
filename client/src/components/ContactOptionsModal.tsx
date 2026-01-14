import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { MessageCircle, Phone } from "lucide-react";

interface ContactOptionsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ContactOptionsModal({ open, onOpenChange }: ContactOptionsModalProps) {
  const whatsappNumber = "919626664792";
  const phoneNumber = "+919626664792";

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi! I would like to speak with an advisor about Skill Univ programs.");
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
    onOpenChange(false);
  };

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center">
          <DialogTitle className="text-xl sm:text-2xl font-bold">Talk to an Advisor</DialogTitle>
          <DialogDescription className="text-sm sm:text-base">
            Choose how you'd like to connect with us
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-2 sm:mt-4">
          {/* WhatsApp Option */}
          <button
            onClick={handleWhatsApp}
            className="group flex flex-col items-center gap-2 sm:gap-4 p-4 sm:p-6 rounded-2xl border-2 border-border bg-card hover:border-green-500 hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-200"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center group-hover:bg-green-500 group-hover:scale-110 transition-all duration-200">
              <svg 
                viewBox="0 0 24 24" 
                className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 dark:text-green-400 group-hover:text-white transition-colors"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
            <div className="text-center">
              <p className="font-bold text-foreground text-base sm:text-lg">WhatsApp</p>
              <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block">Chat with us instantly</p>
            </div>
          </button>

          {/* Call Option */}
          <button
            onClick={handleCall}
            className="group flex flex-col items-center gap-2 sm:gap-4 p-4 sm:p-6 rounded-2xl border-2 border-border bg-card hover:border-primary hover:bg-accent transition-all duration-200"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-200">
              <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <div className="text-center">
              <p className="font-bold text-foreground text-base sm:text-lg">Call Us</p>
              <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block">+91 96266 64792</p>
            </div>
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
