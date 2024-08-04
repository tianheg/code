#include <stdio.h>
#include <string.h>

int main()
{
    char str1[20] = "Hello ";
    char str2[20];

    strcpy(str2, str1);

    char str3[] = "Hi";

    printf("%s\n", str2);

    printf("%d\n", strcmp(str1, str2));
    printf("%d\n", strcmp(str1, str3));
}