export class Challenge {
    static solution(num: number) {
        let sum = 0;
        for (let i = num - 1; i > 0; i--) {
            if (i % 3 === 0 || i % 5 === 0) {
                sum += i;
            }
        }
        return sum;
    }
}