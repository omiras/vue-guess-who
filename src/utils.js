export function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

export function rgbToHex(r, g, b) {
    // Ensure that the values are within the valid range (0-255)
    r = Math.min(255, Math.max(0, r));
    g = Math.min(255, Math.max(0, g));
    b = Math.min(255, Math.max(0, b));

    // Convert each component to its hexadecimal representation
    const hexR = r.toString(16).padStart(2, '0');
    const hexG = g.toString(16).padStart(2, '0');
    const hexB = b.toString(16).padStart(2, '0');

    // Combine the components with the '#' prefix
    const hexColor = `#${hexR}${hexG}${hexB}`;

    return hexColor.toUpperCase(); // Optionally convert to uppercase for consistency
}