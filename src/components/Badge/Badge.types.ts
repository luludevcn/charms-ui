
export interface BadgeProps extends React.HTMLAttributes<HTMLElement> {
    title: string;
    count?: number;
    leftBg?: Colors;
    rightBg?: Colors;
    href?: string;
}

type Colors = 'bg-gray-600' | 'bg-blue-600' | 'bg-green-600' | 'bg-yellow-600' | 'bg-red-600'; // Add actual color values as needed