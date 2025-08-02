
export interface RecountProps extends React.HTMLAttributes<HTMLElement> {
    text: string;
    speed?: number;
    delay?: number;
    onTypingStart?: () => void;
    onTypingEnd?: () => void;
    className?: string;
    style?: React.CSSProperties;
}