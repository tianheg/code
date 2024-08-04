#include <stdio.h>

int main()
{
    FILE *fptr;

    fptr = fopen("c_created_file.txt", "r");

    char myString[100];

    if (fptr != NULL)
    {
        while (fgets(myString, 100, fptr))
        {
            printf("%s", myString);
        }
    }
    else
    {
        printf("Cannot open the file.");
    }
    fclose(fptr);
    return 0;
}
