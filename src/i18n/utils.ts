export function interpolate(
    text: string,
    vars?: Record<string, string | number>
): string {
    if (!vars) return text;

    return Object.entries(vars).reduce((acc, [key, value]) => {
        const regex = new RegExp(`{{\\s*${key}\\s*}}`, 'g');
        return acc.replace(regex, String(value));
    }, text);
}
