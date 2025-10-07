import { ReactNode } from "react";

type TabProps = {
    label: string;
    isActive: boolean;
    onClick: () => void;
};

export default function Tab({ label, isActive, onClick }: TabProps) {
    return (
        <button
            className={`px-4 py-2 font-medium transition-colors ${isActive ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-600 hover:text-blue-600"
                }`}
            onClick={onClick}
        >
            {label}
        </button>
    );
}
