import { Skeleton } from "@/components/ui/skeleton";

export function ProgramCardSkeleton() {
  return (
    <div className="bg-card rounded-2xl border border-border p-6 shadow-sm flex flex-col h-full animate-pulse">
      {/* Header with badge and icon */}
      <div className="flex justify-between items-start mb-4">
        <Skeleton className="h-6 w-32 rounded-full" />
        <Skeleton className="h-8 w-8 rounded-full" />
      </div>
      
      {/* Title */}
      <Skeleton className="h-7 w-4/5 mb-2" />
      
      {/* Description lines */}
      <div className="space-y-2 mb-6 flex-grow">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
      
      {/* Info section */}
      <div className="space-y-3 mb-6 pt-4 border-t border-border/50">
        <div className="flex items-center gap-2">
          <Skeleton className="w-4 h-4 rounded" />
          <Skeleton className="h-4 w-24" />
        </div>
        <div className="flex items-center gap-2">
          <Skeleton className="w-4 h-4 rounded" />
          <Skeleton className="h-4 w-32" />
        </div>
      </div>

      {/* Button */}
      <Skeleton className="h-12 w-full rounded-xl" />
    </div>
  );
}
