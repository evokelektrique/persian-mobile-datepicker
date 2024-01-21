import type { PickerDateModel } from '../components/WheelPicker/index.types';
/**
 * Add prefix for every classname
 *
 * @param {string} prefix
 */
export declare function prefixClassName(prefix: string): (className: string) => string;
/**
 * Generate an Array of Numbers with a fixed length
 *
 * @private
 * @example
 * generateAnArrayOfNumbers(5) // [1,2,3,4,5]
 */
export declare function generateAnArrayOfNumbers(length: number): Array<number>;
/**
 * Generate an array of numbers in range of [start] and [end]
 *
 * @private
 * @example
 * generateArrayInRangeOfNumbers(1400, 1405) // [1400, 1401, 1402, 1403, 1404, 1405]
 */
export declare function generateArrayInRangeOfNumbers(start: number, end: number): Array<number>;
/**
 * WheelPicker selected items value is an array of strings which can't help us to finger out the selected date, but we can convert it to a valid date
 *
 * @private
 * @example
 * const selectedDate = ["year-1400", "month-3", "day-10"];
 * const parsedSelectedDate = convertSelectedDateToObject(selectedDate);
 * // result
 * {
 *   year: 1400,
 *   month: 3,
 *   day: 10
 * }
 */
export declare function convertSelectedDateToObject(selectedDate: Array<string>): PickerDateModel;
/**
 * Convert the Object of Selected Date to an Array of string which WheelPicker can use to figure out the current selected columns' values by the Date format order
 *
 * @private
 * @example
 * const selectedDate = {
 *   month: 3,
 *   year: 1400,
 *   day: 10
 * };
 * const parsedSelectedDate = convertSelectedDateObjectToArray(selectedDate);
 * // result
 * ["year-1400", "month-3", "day-10"]
 */
export declare function convertSelectedDateObjectToArray(selectedDate: PickerDateModel): Array<string>;
/**
 * Check if an Object is really empty.
 * @param obj
 */
export declare function isObjectEmpty(obj: Object): boolean;
/**
 * Convert negative number to positive
 *
 * @private
 * @example
 * toPositive(-10) // 10
 */
export declare function toPositive(n: number): number;
