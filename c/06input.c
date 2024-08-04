#include <stdio.h>

int main()
{
    char fullName[30];

    printf("Enter your full name: \n");
    fgets(fullName, sizeof(fullName), stdin);
    printf("Hello %s", fullName);
}