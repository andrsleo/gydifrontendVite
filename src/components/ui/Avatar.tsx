// src/components/ui/Avatar.tsx
type AvatarProps = {
    src?: string;
    alt?: string;
    size?: "sm" | "md" | "lg";
};

export default function Avatar({ src, alt = "avatar", size = "md" }: AvatarProps) {
    const sizes = {
        sm: "w-8 h-8 text-sm",
        md: "w-12 h-12 text-base",
        lg: "w-16 h-16 text-lg",
    };

    return (
        <div
            className={`flex items-center justify-center rounded-full bg-gray-200 overflow-hidden ${sizes[size]}`}
        >
            {src ? (
                <img src={src} alt={alt} className="w-full h-full object-cover" />
            ) : (
                <span className="text-gray-600">{alt[0]?.toUpperCase()}</span>
            )}
        </div>
    );
}
