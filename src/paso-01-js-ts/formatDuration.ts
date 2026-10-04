export function formatDuration(totalSeconds: number): string {
    const minutes = textWithPad(Math.floor(totalSeconds/60));
    const seconds = textWithPad(totalSeconds % 60); 
    return `${minutes}:${seconds}`;
}

function textWithPad(n: number): string {
    const text = String(n).padStart(2, "0");
    return text;    
}