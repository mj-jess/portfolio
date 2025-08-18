import React, {
    useState,
    useRef,
    useEffect,
    useMemo,
    type ReactNode,
} from 'react';
import clsx from 'clsx';
import { useTheme } from '../../hooks';

type DropdownProps = {
    children: ReactNode;
    className?: string;
    closeOnClick?: boolean;
};

type DropdownTriggerProps = {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
};

type DropdownItemProps = {
    children: ReactNode;
    onClick?: () => void;
    className?: string;
};

const Dropdown = ({
    children,
    className,
    closeOnClick = true,
}: DropdownProps) => {
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
                        'absolute right-0 mt-2 w-40 rounded shadow-lg z-50 overflow-hidden',
                        className
                    )}
                >
                    {items}
                </div>
            )}
        </div>
    );
};

const Trigger = ({ children, className, onClick }: DropdownTriggerProps) => {
    const { theme } = useTheme();

    return (
        <button
            onClick={onClick}
            className={clsx(
                'px-4 py-2 rounded shadow font-medium transition',
                theme.surface,
                theme.text,
                'hover:bg-gray-200 dark:hover:bg-gray-600',
                className
            )}
        >
            {children}
        </button>
    );
};

Trigger.displayName = 'DropdownTrigger';

const Item = ({ children, className, onClick }: DropdownItemProps) => {
    const { theme } = useTheme();

    return (
        <button
            onClick={onClick}
            className={clsx(
                'w-full text-left px-4 py-2 transition-colors',
                'hover:bg-gray-100 dark:hover:bg-gray-700',
                'first:rounded-t-md last:rounded-b-md',
                theme.surface,
                theme.text,
                className
            )}
        >
            {children}
        </button>
    );
};

Item.displayName = 'DropdownItem';

Dropdown.Item = Item;
Dropdown.Trigger = Trigger;

export default Dropdown;
