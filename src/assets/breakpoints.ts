// Device screen sizes
// 0 - 320px:          Small
// 321px - 768px:      Medium
// 768px - 1024px:     Large

const screenSize = {
    sm: "320px",
    md: "768px",
    lg: "1024"
};

const device = {
    sm: `(min-width: ${screenSize.sm})`,
    md: `(min-width: ${screenSize.md})`,
    lg: `(min-width: ${screenSize.lg})`
};

export default {screenSize, device};