// src/components/ui/Modal.tsx
type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
};

export default function Modal({ isOpen, onClose, children }: ModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="w-full max-w-lg rounded-lg bg-white shadow-lg">
                <div className="p-4">{children}</div>
                <div className="flex justify-end border-t p-3">
                    <button
                        onClick={onClose}
                        className="rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600"
                    >
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    );
}
