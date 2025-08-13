import React, { type JSX } from 'react';
import clsx from 'clsx';
import { useTheme } from '../../hooks/useTheme';

interface TypographyProps {
    children: React.ReactNode;
    className?: string;
}

function createTypography(
    tag: keyof JSX.IntrinsicElements,
    baseClasses: string,
    isSecondary?: boolean
) {
    return ({ children, className = '' }: TypographyProps) => {
        const { theme } = useTheme();
        const Tag = tag;

        const colorClass = isSecondary ? theme.textSecondary : theme.text;

        return (
            <Tag className={clsx(baseClasses, colorClass, className)}>
                {children}
            </Tag>
        );
    };
}

const typography = {
    h1: 'text-4xl font-bold leading-tight font-heading',
    h2: 'text-3xl font-semibold leading-snug font-heading',
    h3: 'text-2xl font-semibold leading-snug font-heading',
    h4: 'text-xl font-semibold leading-snug font-heading',
    p: 'text-base font-normal leading-relaxed font-sans',
    span: 'text-sm font-normal leading-relaxed font-sans',
    small: 'text-sm font-normal leading-relaxed font-sans',
    caption: 'text-xs font-light leading-snug font-mono',
};

export const Typography = {
    h1: createTypography('h1', typography.h1),
    h2: createTypography('h2', typography.h2),
    h3: createTypography('h3', typography.h3),
    h4: createTypography('h4', typography.h4),
    p: createTypography('p', typography.p),
    span: createTypography('span', typography.span),
    small: createTypography('small', typography.small, true),
    caption: createTypography('span', typography.caption, true),
};

export default Typography;
