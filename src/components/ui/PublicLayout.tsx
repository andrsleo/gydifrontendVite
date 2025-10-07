import { ReactNode } from "react";

interface PublicLayoutProps {
    children: ReactNode;
}

export default function PublicLayout({ children }: PublicLayoutProps) {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-start p-6">
            {children}
        </div>
    );
}
