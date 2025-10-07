import { ReactNode } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

type LayoutProps = {
    children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Header />
                <main className="p-6 flex-1 overflow-auto">{children}</main>
            </div>
        </div>
    );
}
