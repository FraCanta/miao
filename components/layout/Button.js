import { Icon } from "@iconify/react";

const variants = {
  primary: "border-red bg-red text-white hover:border-main hover:bg-main",
  outline:
    "border-main/40 bg-transparent text-main hover:border-red hover:bg-red hover:text-white",
  inverse:
    "border-white bg-white text-red hover:border-main hover:bg-main hover:text-white",
};

const sizes = {
  sm: "min-h-11 px-5 py-2.5 text-xs",
  md: "min-h-12 px-6 py-3 text-sm",
  lg: "min-h-14 px-7 py-4 text-sm",
};

const Button = ({
  children,
  type = "button",
  variant = "primary",
  size = "md",
  arrow = true,
  arrowIcon = "prime:arrow-up-right",
  className = "",
  disabled,
  ...props
}) => (
  <button
    type={type}
    disabled={disabled}
    className={`group inline-flex items-center justify-center gap-4 border font-bold uppercase tracking-[0.1em] transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red disabled:cursor-wait disabled:opacity-70 ${variants[variant]} ${sizes[size]} ${className}`}
    {...props}
  >
    <span>{children}</span>
    {arrow && (
      <Icon
        icon={arrowIcon}
        aria-hidden="true"
        className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    )}
  </button>
);

export default Button;
