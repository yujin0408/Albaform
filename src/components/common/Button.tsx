import cn from "@/utils/cn";
import { cva } from "class-variance-authority";
import React, { ButtonHTMLAttributes, ReactElement } from "react";

const buttonVariants = cva(
  "w-full p-4 lg:p-5 rounded-lg text-lg lg:text-xl font-semibold ",
  {
    variants: {
      buttonType: {
        primary:
          "bg-orange-300 text-gray-50 hover:bg-orange-200 focus-within:bg-orange-200",
        outline:
          "border border-orange-300 text-orange-300 hover:border-orange-200 hover:text-orange-200 focus-within-border-orange-200 focus-within-text-orange-200",
      },
      disabled: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      {
        buttonType: "primary",
        disabled: true,
        className: "bg-gray-100 hover:bg-gray-100 cursor-default",
      },
      {
        buttonType: "outline",
        disabled: true,
        className:
          "border-gray-100 text-gray-100 cursor-default hover:border-gray-100 hover:text-gray-100 focus-within-text-gray-100 focus-within-border-gray-100",
      },
    ],
    defaultVariants: {
      buttonType: "primary",
    },
  },
);

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: "primary" | "outline";
}

function Button({ buttonType = "primary", disabled = false, ...props }: Props) {
  return (
    <button
      disabled={disabled}
      className={cn(buttonVariants({ buttonType, disabled }))}
      {...props}
    />
  );
}

export default Button;
