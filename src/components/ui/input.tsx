import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  startAdornment?: React.ReactNode
  endAdornment?: React.ReactNode
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, startAdornment, endAdornment, ...props }, ref) => {
    return (
      <div className="relative flex items-center">
        {/* Render startAdornment if provided */}
        {startAdornment && <span className="absolute left-2">{startAdornment}</span>}
        <input
          type={type}
          className={cn(
            "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            startAdornment ? "pl-8" : "", // Add left padding if there's a startAdornment
            endAdornment ? "pr-8" : "",   // Add right padding if there's an endAdornment
            className
          )}
          ref={ref}
          {...props}
        />
        {/* Render endAdornment if provided */}
        {endAdornment && <span className="absolute right-2">{endAdornment}</span>}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
