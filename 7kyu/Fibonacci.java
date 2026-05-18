public class Fibonacci {
    public static long fib(int n) {
        if (n <= 0) {
            return 0;
        } else if (n == 1) {
            return 1;
        }
        
        long prev = 0;  // F(0)
        long curr = 1;  // F(1)
        
        for (int i = 2; i <= n; i++) {
            long next = prev + curr;
            prev = curr;
            curr = next;
        }
        
        return curr;
    }
    
public static void main(String[] args) {
        System.out.println(fib(10));
    }
}
