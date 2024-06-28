"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");

interface LabelProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof labelVariants> {}

const Label = React.forwardRef<HTMLDivElement, LabelProps>(({ className, ...props }, ref) => (
	<div ref={ref} className={cn(labelVariants(), className)} {...props} />
));

Label.displayName = "Label";

export { Label, type LabelProps };
