import { ReactNode, useState } from "react";
import Tab from "./Tab";

type TabsProps = {
    tabs: { label: string; content: ReactNode }[];
};

export default function Tabs({ tabs }: TabsProps) {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="w-full">
            {/* Botones de tabs */}
            <div className="flex border-b border-gray-200">
                {tabs.map((tab, idx) => (
                    <Tab
                        key={idx}
                        label={tab.label}
                        isActive={activeIndex === idx}
                        onClick={() => setActiveIndex(idx)}
                    />
                ))}
            </div>

            {/* Contenido de la tab activa */}
            <div className="mt-4">
                {tabs[activeIndex].content}
            </div>
        </div>
    );
}
