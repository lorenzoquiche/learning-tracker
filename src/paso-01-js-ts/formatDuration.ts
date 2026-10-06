export function formatDuration(totalSeconds: number): string {
    const safeSeconds = Math.max(0, Math.trunc(totalSeconds));
    if (Number.isFinite(safeSeconds) == false){
        safeSeconds = 0;
    }
    const seconds = textWithPad2(safeSeconds % 60); 
    const minutes = textWithPad2(Math.floor(safeSeconds/60));
    const hour = textWithPad2(Math.floor(minutes/60));

  
    return `${hour}:${minutes}:${seconds}`;
}

function textWithPad2(n: number): string {
    return String(n).padStart(2, "0");    
}
