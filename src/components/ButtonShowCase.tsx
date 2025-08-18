import { useState } from 'react';
import { Button, Typography } from '../ui';

const variants = ['fill', 'outline', 'ghost', 'link'] as const;
const colors = [
    'primary',
    'secondary',
    'tertiary',
    'info',
    'warning',
    'error',
    'success',
] as const;
const sizes = ['sm', 'md', 'lg'] as const;

export const ButtonShowcase = () => {
    const [disabled, setDisabled] = useState(false);
    const [size, setSize] = useState<(typeof sizes)[number]>('md');
    const [variant, setVariant] = useState<(typeof variants)[number]>('fill');

    return (
        <div className="space-y-6 p-8">
            <Typography.h3 className="text-lg font-bold mb-4">
                Button Showcase
            </Typography.h3>

            <div className="flex flex-wrap gap-4 mb-6 items-center">
                <Typography.label className="flex flex-col">
                    Variant:
                    <select
                        value={variant}
                        onChange={(e) =>
                            setVariant(e.target.value as typeof variant)
                        }
                        className="mt-1 p-1 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    >
                        {variants.map((v) => (
                            <option key={v} value={v}>
                                {v}
                            </option>
                        ))}
                    </select>
                </Typography.label>

                <Typography.label className="flex flex-col">
                    Size:
                    <select
                        value={size}
                        onChange={(e) => setSize(e.target.value as typeof size)}
                        className="mt-1 p-1 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    >
                        {sizes.map((s) => (
                            <option key={s} value={s}>
                                {s}
                            </option>
                        ))}
                    </select>
                </Typography.label>

                <Typography.label className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        checked={disabled}
                        onChange={(e) => setDisabled(e.target.checked)}
                    />
                    Disabled
                </Typography.label>
            </div>

            <div className="flex flex-wrap gap-4">
                {colors.map((color) => (
                    <Button
                        key={color}
                        variant={variant}
                        color={color}
                        size={size}
                        disabled={disabled}
                    >
                        {color.charAt(0).toUpperCase() + color.slice(1)}
                    </Button>
                ))}
            </div>
        </div>
    );
};
