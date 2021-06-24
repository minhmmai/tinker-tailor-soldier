// Device screen sizes
// 0 - 320px:          Small
// 321px - 768px:      Medium
// 768px - 1024px:     Large

const screenSize = {
    sm: '320px',
    md: '768px',
    lg: '1024px'
};

const device = {
    xs: `(max-width: ${screenSize.sm})`,
    sm: `(min-width: ${screenSize.sm})`,
    md: `(min-width: ${screenSize.md})`,
    lg: `(min-width: ${screenSize.lg})`
};

const breakpoints = {screenSize, device};

export default breakpoints;