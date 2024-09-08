/**
 * A utility class for data structures.
 */
export class DataStructuresUtil {
    /**
     * Gets a random number between the given min and max values.
     * @param min The minimum value (inclusive).
     * @param max The maximum value (inclusive).
     * @returns A random number between min and max.
     */
    public static getRandomNumberBetween(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    /**
     * Performs a binary search on the given array.
     * @param arr The array to search.
     * @param target The value to search for.
     * @returns The index of the value if found, or -1 if not found.
     */
    public static binarySearch(arr: number[], target: number): number {
        let left = 0;
        let right = arr.length - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] === target) {
                return mid;
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return -1;
    }
}
