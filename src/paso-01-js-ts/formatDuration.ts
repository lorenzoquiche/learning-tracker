export function formatDuration(totalSeconds: number): string {
    const safeSeconds = Math.max(0, Math.trunc(totalSeconds));
    const minutes = textWithPad2(Math.floor(safeSeconds/60));
    const seconds = textWithPad2(safeSeconds % 60); 
    return `${minutes}:${seconds}`;
}

function textWithPad2(n: number): string {
    return String(n).padStart(2, "0");    
}
