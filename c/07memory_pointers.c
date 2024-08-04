#include <stdio.h>

int main()
{
    int myNum[4] = {23, 14, 23, 189};
    *myNum = 12;
    *(myNum + 1) = 21;
    // &variable is a pointer
    // pointer store a value of other variable's memory address

    printf("%d\n", *myNum);
    printf("%d\n", *(myNum + 1));

    // what's the relationship between pointers and arrays?
    // in C, the name of an array, is actually a pointer to the first element of the array.
}