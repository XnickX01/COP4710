#include <stdio.h>
#include <stdlib.h>

#define CACHE_SIZE 32

struct CacheLine {
    int valid;
    int tag;
    int access_time;
};

struct Cache {
    struct CacheLine lines[CACHE_SIZE];
    int hits;
    int accesses;
};

int main() {
    // Open file
    FILE* fp;
    fp = fopen("data.txt", "r");
    if (fp == NULL) {
        printf("Error opening file\n");
        return 1;
    }

    // Initialize cache
    struct Cache cache;
    for (int i = 0; i < CACHE_SIZE; i++) {
        cache.lines[i].valid = 0;
        cache.lines[i].tag = -1;
        cache.lines[i].access_time = -1;
    }
    cache.hits = 0;
    cache.accesses = 0;

    // Read data from file
    int address;
    while (fscanf(fp, "%x", &address) != EOF) {
        // Extract tag and index
        int tag = address >> 5;
        int index = tag % CACHE_SIZE;

        // Check if line is valid and has the same tag
        if (cache.lines[index].valid == 1 && cache.lines[index].tag == tag) {
            cache.hits++;
            cache.lines[index].access_time = cache.accesses;
        }
        // Otherwise, load data into cache line
        else {
            cache.accesses++;
            cache.lines[index].valid = 1;
            cache.lines[index].tag = tag;
            cache.lines[index].access_time = cache.accesses;
        }

        // Apply least-recently used replacement policy
        int lru_index = 0;
        int lru_time = cache.accesses;
        for (int i = 0; i < CACHE_SIZE; i++) {
            if (cache.lines[i].access_time < lru_time) {
                lru_index = i;
                lru_time = cache.lines[i].access_time;
            }
        }
        cache.lines[lru_index].valid = 0;
        cache.lines[lru_index].tag = -1;
        cache.lines[lru_index].access_time = -1;
    }

    // Close file
    fclose(fp);

    // Print cache statistics
    printf("Direct-mapped cache with LRU replacement policy:\n");
    printf("Number of hits: %d\n", cache.hits);
    printf("Number of total accesses: %d\n", cache.accesses);
    printf("Hit rate: %.2f%%\n", ((float) cache.hits / cache.accesses) * 100);

    return 0;
}
