// src/components/ui/Spinner.tsx
export default function Spinner() {
    return (
        <div className="flex items-center justify-center">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-blue-600 border-t-transparent"></div>
        </div>
    );
}
