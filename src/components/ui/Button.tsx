// src/components/ui/Button.tsx
import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    loading?: boolean;
    variant?: "primary" | "secondary" | "danger";
}

export const Button = ({
    children,
    className,
    loading,
    variant = "primary",
    ...props
}: ButtonProps) => {
    const baseStyles =
        "w-full rounded-md py-2 font-semibold transition focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
        danger: "bg-red-600 text-white hover:bg-red-700",
    };

    return (
        <button
            className={clsx(baseStyles, variants[variant], className)}
            disabled={loading || props.disabled}
            {...props}
        >
            {loading ? "Cargando..." : children}
        </button>
    );
};
