
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    title: string;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
}