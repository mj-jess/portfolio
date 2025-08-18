import { useMemo, type ReactNode } from 'react';
import clsx from 'clsx';
import { useTheme } from '../../hooks';

import type { Color, Size, Variant } from './types';
import { colors } from './colors';

type ButtonProps = {
    children: ReactNode;
    size?: Size;
    color?: Color;
    variant?: Variant;
    disabled?: boolean;
    fullWidth?: boolean;
    className?: string;
    onClick?: () => void;
};

export const Button = ({
    children,
    className,
    size = 'md',
    variant = 'fill',
    color = 'primary',
    disabled = false,
    fullWidth = false,
    onClick,
}: ButtonProps) => {
    const { mode, theme } = useTheme();

    const rounded = 'rounded-md';

    const sizeClasses = {
        sm: 'px-3 py-1 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg',
    };

    const fillColors = useMemo(() => {
        return Object.fromEntries(
            Object.entries(colors[mode]).map(([key, val]) => [
                key,
                clsx(val.bg, val.text, val.hoverBg, 'transition'),
            ])
        ) as Record<Color, string>;
    }, [mode]);

    const outlineColors = useMemo(() => {
        return Object.fromEntries(
            Object.entries(colors[mode]).map(([key, val]) => [
                key,
                clsx(
                    'border',
                    val.border,
                    val.textOutline,
                    val.hoverBorderBg,
                    val.textHover,
                    'transition'
                ),
            ])
        ) as Record<Color, string>;
    }, [mode]);

    const ghostColors = useMemo(() => {
        return Object.fromEntries(
            Object.entries(colors[mode]).map(([key, val]) => [
                key,
                clsx(
                    'bg-transparent',
                    theme.text,
                    val.hoverBorderBg,
                    'transition'
                ),
            ])
        ) as Record<Color, string>;
    }, [mode, theme.text]);

    const linkColors = useMemo(() => {
        return Object.fromEntries(
            Object.entries(colors[mode]).map(([key, val]) => [
                key,
                clsx(
                    'bg-transparent underline px-0 py-0',
                    val.textOutline,
                    !disabled && 'hover:opacity-75',
                    'transition'
                ),
            ])
        ) as Record<Color, string>;
    }, [mode, disabled]);

    const variantClasses = {
        fill: fillColors[color],
        outline: outlineColors[color],
        ghost: ghostColors[color],
        link: linkColors[color],
    };

    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={clsx(
                'inline-flex items-center justify-center font-medium transition',
                sizeClasses[size],
                rounded,
                fullWidth && 'w-full',
                disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
                variantClasses[variant],
                className
            )}
        >
            {children}
        </button>
    );
};

export default Button;
