#include <stdio.h>
#include <math.h>

int sum(int k);

int main()
{
    int result = sum(10);
    printf("Result: %f\n", sqrt(16));
    printf("Result: %f\n", ceil(1.4));
    printf("Result: %f\n", floor(1.4));
    printf("Result: %f\n", pow(4,2));
    printf("Result: %d\n", abs(-4));
    

    return 0;
}

int sum (int k) {
    if (k > 0) {
        return k + sum(k - 1);
    } else {
        return 0;
    }
}