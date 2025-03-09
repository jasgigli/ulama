// app/components/ui/Button.tsx
import React, { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary"; // Add variants
  children: React.ReactNode;
}
// Use forwardRef to allow passing refs to the button
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", children, className, ...props }, ref) => {
    const variantClasses =
      variant === "primary"
        ? "bg-teal-600 hover:bg-teal-700 text-white"
        : "bg-amber-500 hover:bg-amber-600 text-white";

    return (
      <button
        className={`${variantClasses} font-bold py-2 px-4 rounded transition duration-300 ${className}`}
        {...props}
        ref={ref}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export default Button;
