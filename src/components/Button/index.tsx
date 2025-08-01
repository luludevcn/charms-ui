import React from "react";
import type { ButtonProps } from "./Button.types";

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
    <button className="px-4 py-2 bg-blue-500 text-white rounded" {...props}>
        {children}
    </button>
)