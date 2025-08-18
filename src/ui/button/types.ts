import type { ReactNode } from 'react';

export type Variant = 'fill' | 'outline' | 'ghost' | 'link';
export type Color =
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'info'
    | 'warning'
    | 'error'
    | 'success';
export type Size = 'sm' | 'md' | 'lg';

export type ButtonProps = {
    children: ReactNode;
    size?: Size;
    color?: Color;
    variant?: Variant;
    disabled?: boolean;
    fullWidth?: boolean;
    className?: string;
    onClick?: () => void;
};
