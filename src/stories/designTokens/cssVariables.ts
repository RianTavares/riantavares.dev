export const fontFamilyVariables = [
    '--theme-font-primary', 
    '--theme-font-secondary'
];

export const spacingVariables = [
    '--space-0-5x',
    '--space-1x',
    '--space-1-5x',
    '--space-2x',
    '--space-2-5x',
    '---space-3x',
    '--space-4x',
    '--space-5x',
    '--space-6x',
    '--space-7x',
    '--space-8x',
    '--space-9x',
    '--space-10x',
    '--space-11x',
    '--space-12x',
];

export const animationVariables = ['--theme-transition-duration-base'];

export const radiusVariables = ['--theme-border-radius', '--theme-button-border-radius'];
export const otherHeightVariables = ['--theme-form-elements-height'];

export const colorVariables = [
    '--color-brand-primary',
    '--color-brand-secondary',
    '--color-green-90', 
    '--color-green-80',
    '--color-green-70',
    '--color-green-60',
    '--color-green-50',
    '--color-green-40',
    '--color-green-30',
    '--color-green-20',
    '--color-green-10',
    '--color-background-light',
    '--color-background-dark',
    '--color-black-0', 
    '--color-black-80',
    '--color-black-70',
    '--color-black-60',
    '--color-black-50', 
    '--color-black-40',
    '--color-black-30',
    '--color-black-20',
    '--color-black-10',
    '--color-white-80',
    '--color-white-70',
    '--color-white-60',
    '--color-white-50', 
    '--color-white-40',
    '--color-white-30',
    '--color-white-20',
    '--color-white-10',
    '--color-white-0',
];

export const contentWidthVariables = [
    '--theme-content-width-xs',
    '--theme-content-width-sm',
    '--theme-content-width-md',
    '--theme-content-width-lg',
];

export const filterCssVariables = (
    styles: Record<string, string>,
    filter?: string,
): Record<string, string> => {
    const filteredStyles = Object.entries(styles).filter(([key]) => key.startsWith(filter ?? '--'));
    return Object.fromEntries(filteredStyles);
};
