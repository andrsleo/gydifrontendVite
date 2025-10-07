import { ReactNode } from "react";
import { Bell, User } from "lucide-react";

type HeaderProps = {
    children?: ReactNode;
};

export default function Header({ children }: HeaderProps) {
    return (
        <header className="flex items-center justify-between bg-white p-4 shadow-md">
            <div className="text-xl font-bold text-gray-800">Mi Dashboard</div>
            <div className="flex items-center space-x-4">
                {children}
                <button className="p-2 rounded-full hover:bg-gray-100">
                    <Bell className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-2 rounded-full hover:bg-gray-100">
                    <User className="w-5 h-5 text-gray-600" />
                </button>
            </div>
        </header>
    );
}
