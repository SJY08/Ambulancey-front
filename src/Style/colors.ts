export const Colors = {
    Black: "#000000",
    Gray900: "#111111",
    Gray800: "#222222",
    Gray700: "#444444",
    Gray600: "#666666",
    Gray500: "#888888",
    Gray400: "#AAAAAA",
    Gray300: "#cccccc",
    Gray200: "#d9d9d9",
    Gray100: "#eeeeee",
    Gray50: "#f6f6f6",
    White: "#ffffff",
    Blue900: "#001133",
    Blue800: "#011c52",
    Blue700: "#052970",
    Blue600: "#0b41ad",
    Blue500: "#1860f0",
    Blue400: "#3573f0",
    Blue300: "#6496fa",
    Blue200: "#8cb1fa",
    Blue100: "#bed2fa",
    Blue50: "#ebf0fa",
    LightBlue50: "#ebf9ff",
    CriticalMain: "#db2c36",
    CriticalBackground: "#ffe6d8",
} as const

export type colorsKeyOfType = keyof typeof Colors
