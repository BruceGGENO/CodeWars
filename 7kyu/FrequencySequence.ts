export function freqSeq(str: string, sep: string): string {
    return str.split('').map((i, ix) => str.split('').filter(j => j === i).length).join(sep); // your code here
}