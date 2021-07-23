export const theme = {
    bg: '#fafafa',
    fg: '#141414',

    offsetBg: '#d4d4d4',
    offsetFg: '#303030',

    breakpoints: {
        xs: '0',
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        xxl: '1400px',
    },

    shadow: '0 1px 10px 1px',
}

export type ITheme = typeof theme;