import React, {
    useState,
    useRef,
    useEffect,
    useMemo,
    type ReactNode,
} from 'react';
import clsx from 'clsx';

import { useTheme } from '../../hooks';
import { Button } from '../button/Button';

import type { ButtonProps } from '../button/types';

type DropdownProps = {
    children: ReactNode;
    className?: string;
    closeOnClick?: boolean;
};

type DropdownTriggerProps = ButtonProps & {
    children: ReactNode;
};

type DropdownItemProps = ButtonProps & {
    children: ReactNode;
};

const Dropdown = ({
    children,
    className,
    closeOnClick = true,
}: DropdownProps) => {
    const { theme } = useTheme();

    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const { trigger, items } = useMemo(() => {
        const items: React.ReactElement[] = [];
        let trigger: React.ReactElement | null = null;

        React.Children.toArray(children).forEach((child) => {
            if (!React.isValidElement(child)) return;

            if ((child.type as any).displayName === 'DropdownTrigger') {
                const typedChild =
                    child as React.ReactElement<DropdownTriggerProps>;

                trigger = React.cloneElement(typedChild, {
                    onClick: () => setOpen(!open),
                });
            } else if ((child.type as any).displayName === 'DropdownItem') {
                const typedChild =
                    child as React.ReactElement<DropdownItemProps>;

                const clonedChild = React.cloneElement(typedChild, {
                    onClick: () => {
                        typedChild.props?.onClick?.();
                        setOpen(false);
                    },
                });

                items.push(closeOnClick ? clonedChild : typedChild);
            }
        });

        return { trigger, items };
    }, [children, closeOnClick, open]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () =>
            document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div ref={ref} className={clsx('relative inline-block', className)}>
            {trigger}

            {open && (
                <div
                    className={clsx(
                        'absolute right-0 mt-2 w-40 rounded-md shadow-md z-60 overflow-hidden',
                        theme.background,
                        className
                    )}
                >
                    {items}
                </div>
            )}
        </div>
    );
};

const Trigger = (props: DropdownTriggerProps) => {
    const { children } = props;

    return (
        <Button variant="ghost" color="tertiary" {...props}>
            {children}
        </Button>
    );
};

Trigger.displayName = 'DropdownTrigger';

const Item = (props: DropdownItemProps) => {
    const { children, className } = props;

    return (
        <Button
            fullWidth
            variant="ghost"
            color="tertiary"
            {...props}
            className={clsx(
                'first:rounded-b-none last:rounded-t-none',
                className
            )}
        >
            {children}
        </Button>
    );
};

Item.displayName = 'DropdownItem';

Dropdown.Item = Item;
Dropdown.Trigger = Trigger;

export default Dropdown;
