import { forwardRef } from "react";

const IconButton = forwardRef(function IconButton(
  { children, label, className = "", type = "button", ...props },
  ref
) {
  return (
    <button
      ref={ref}
      type={type}
      aria-label={label}
      className={`inline-flex min-h-11 min-w-11 items-center justify-center transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red ${className}`}
      {...props}
    >
      {children}
    </button>
  );
});

export default IconButton;
