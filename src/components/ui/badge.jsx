import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap",
  {
    variants: {
      variant: {
        live: "border-emerald-500/40 bg-emerald-500/10 text-emerald-300",
        build: "border-amber-500/40 bg-amber-500/10 text-amber-300",
        muted: "border-border bg-secondary text-secondary-foreground",
        outline: "border-border text-foreground",
      },
    },
    defaultVariants: {
      variant: "muted",
    },
  }
);

function Badge({ className, variant, ...props }) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
