#include <stdio.h>
#include <stdbool.h>

int main()
{
    int ages[] = {20, 22, 18, 35, 48, 26, 87, 79};
    float avg, sum = 0;

    int len = sizeof(ages) / sizeof(ages[0]);

    int lowestAge = ages[0];

    for (int i = 0; i < len; i++)
    {
        // sum += ages[i];
        if (lowestAge > ages[i]) {
            lowestAge = ages[i];
        }
    }

    avg = sum / len;
    // printf("The average age is: %.2f\n", avg);
    printf("The lowest age is: %d\n",lowestAge);
}