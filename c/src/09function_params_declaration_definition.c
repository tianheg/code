#include <stdio.h>

int myFunc(int, int);

int main()
{
    int result = myFunc(10, 20);
    printf("Result: %d\n", result);

    return 0;
}


int myFunc(int x, int y) {
    return x + y;
}