// src/components/ui/Switch.tsx
import { useState } from "react";

type SwitchProps = {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
};

export default function Switch({ checked = false, onChange }: SwitchProps) {
    const [isOn, setIsOn] = useState(checked);

    const toggle = () => {
        setIsOn(!isOn);
        onChange?.(!isOn);
    };

    return (
        <button
            onClick={toggle}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${isOn ? "bg-blue-600" : "bg-gray-300"
                }`}
        >
            <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${isOn ? "translate-x-6" : "translate-x-1"
                    }`}
            />
        </button>
    );
}
