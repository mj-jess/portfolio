import React, { type JSX } from 'react';
import clsx from 'clsx';

interface TypographyProps {
    children: React.ReactNode;
    className?: string;
}

function createTypography(
    tag: keyof JSX.IntrinsicElements,
    baseClasses: string
) {
    return ({ children, className = '' }: TypographyProps) => {
        const Tag = tag;
        return <Tag className={clsx(baseClasses, className)}>{children}</Tag>;
    };
}

export const Typography = {
    h1: createTypography('h1', 'text-4xl font-bold leading-tight font-heading'),
    h2: createTypography(
        'h2',
        'text-3xl font-semibold leading-snug font-heading'
    ),
    h3: createTypography(
        'h3',
        'text-2xl font-semibold leading-snug font-heading'
    ),
    h4: createTypography(
        'h4',
        'text-xl font-semibold leading-snug font-heading'
    ),
    p: createTypography('p', 'text-base font-normal leading-relaxed font-sans'),
    span: createTypography(
        'span',
        'text-base font-normal leading-relaxed font-sans'
    ),
    small: createTypography(
        'small',
        'text-sm font-normal leading-relaxed font-sans'
    ),
    caption: createTypography(
        'span',
        'text-xs font-light leading-snug font-mono'
    ),
};

export default Typography;
