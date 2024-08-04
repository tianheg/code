#include <stdio.h>
#include <stdbool.h>

int main()
{
    int dice = 1;

    while (dice <=6) {
        if (dice < 6 ) {
            printf("No Yatzy\n");
        } else {
            printf("Yatzy!\n");
        }
        dice++;
    }
    
}