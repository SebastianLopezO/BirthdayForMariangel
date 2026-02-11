import {useState} from "react";

interface MessageCardProps {
    title: string;
    message: string;
    delay?: number;
    variant?: "default" | "accent" | "elegant";
}

const variantStyles = {
    default: "bg-background border-birthday-gold/20 hover:border-birthday-gold/50",
    accent: "bg-birthday-cream border-birthday-coral/20 hover:border-birthday-coral/50",
    elegant: "bg-background border-birthday-lavender/30 hover:border-birthday-lavender/60",
};

const variantEmojis = {
    default: "🎂",
    accent: "🎈",
    elegant: "✨",
};

const MessageCard = ({title, message, delay = 0, variant = "default"}: MessageCardProps) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className={`rounded-2xl border-2 p-6 sm:p-8 transition-all duration-500 cursor-pointer hover:shadow-lg hover:scale-[1.03] hover:-translate-y-1 animate-fade-in-up ${variantStyles[variant]} ${isFlipped ? "ring-2 ring-birthday-gold/30" : ""}`}
            style={{animationDelay: `${delay}ms`}}
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">{variantEmojis[variant]}</span>
                <h3 className="text-xl sm:text-2xl font-display text-birthday-chocolate">
                    {title}
                </h3>
            </div>
            <p className="text-foreground/85 font-body text-base sm:text-lg leading-relaxed">
                {message}
            </p>
            {isFlipped && (
                <p className="mt-3 text-sm text-birthday-pink font-body animate-fade-in-up">
                    🎉 Toca de nuevo para cerrar
                </p>
            )}
        </div>
    );
};

export default MessageCard;
