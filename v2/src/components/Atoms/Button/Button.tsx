import cn from "@/lib/cn";

interface ButtonProps {
    label: string | Element | React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    rest?: { [key: string]: unknown };
}

const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    className = "",
    ...rest
}) => {
    return (
        <button
            {...rest}
            className={cn(
                "middle none center rounded-lg px-3 py-2 shadow-lg font-sans text-xs font-bold uppercase transition-all hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none",
                className
            )}
            onClick={onClick && onClick}
        >
            {label}
        </button>
    );
};

export default Button;