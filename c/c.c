#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

int count = 0;

bool teste_sort(int *array, int n)
{
    while (--n > 0)
    {
        if (array[n] < array[n - 1])
            return false;
    }
    return true;
}

void aleatorizar(int *array, int n)
{
    printf("%i\n", count++);
    int i, auxiliar, b;
    for (i = 0; i < n; i++)
    {
        auxiliar = array[i];
        b = rand() % n;
        array[i] = array[b];
        array[b] = auxiliar;
    }
}

void bogosort(int *array, int n)
{
    while (!teste_sort(array, n))
        aleatorizar(array, n);
}

int main()
{
    int alturas[] = {
        157,
        160,
        164,
        174,
        177,
        180,
        181,
        188,
        182,
        185,
    };
    int i;
    bogosort(alturas, 10);
    for (i = 0; i < 10; i++)
        printf("%d ", alturas[i]);
    printf("\n");
}