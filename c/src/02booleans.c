#include <stdio.h>
#include <stdbool.h>

int main()
{
    int myAge = 24;
    int votingAge = 18;

    if (myAge >= votingAge) {
        printf("Old enough to vote!\n");
    } else {
        printf("Not old enough to vote.\n");
    }
}