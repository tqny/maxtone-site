import { cn } from "../../lib/utils";

function Card({ className, ...props }) {
  return (
    <div
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }) {
  return <div className={cn("grid auto-rows-min grid-rows-[auto_auto] gap-2 px-6", className)} {...props} />;
}

function CardTitle({ className, ...props }) {
  return <h3 className={cn("leading-none font-semibold", className)} {...props} />;
}

function CardDescription({ className, ...props }) {
  return <p className={cn("text-sm text-muted-foreground", className)} {...props} />;
}

function CardContent({ className, ...props }) {
  return <div className={cn("px-6", className)} {...props} />;
}

export { Card, CardHeader, CardTitle, CardDescription, CardContent };
