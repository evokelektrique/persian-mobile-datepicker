import type { PickerItemModel, WeekDayText, PickerDateModel, RequiredPickerDateModel } from '../components/WheelPicker/index.types';
export declare const weekDays: Record<number, WeekDayText>;
export declare const jalaliMonths: {
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
    7: string;
    8: string;
    9: string;
    10: string;
    11: string;
    12: string;
};
/**
 * Converts Jalaali Date to Gregorian
 *
 * @public
 */
export declare function newDate({ year, month, day }: PickerDateModel): Date;
/**
 * Converts entered date to an object
 *
 * @public
 */
export declare const convertDateInstanceToDateObject: (date: Date) => RequiredPickerDateModel;
/**
 * Get the number of days in a month of a year
 *
 * @public
 */
export declare function daysInMonth(year: number, month: number): number;
/**
 * Get the day of the week of the given date.
 *
 * @description Returns number, starts from 0, 0 means the first day of Week and 6 means the last day of Week
 * @public
 */
export declare function getWeekDay(year: number, month: number, day: number): number;
/**
 * Get the day of the year of the given date.
 *
 * @public
 */
export declare function getDayOfYear(year: number, month: number, day: number): number;
/**
 * Returns true if the Date is at the Weekend
 *
 * @public
 */
export declare function isWeekend(year: number, month: number, day: number): boolean;
/**
 * Get Name the days of the week
 *
 * @public
 */
export declare function getWeekDayText(year: number, month: number, day: number): WeekDayText;
/**
 * Is the given date valid?
 *
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using toDate.
 * See toDate Invalid Date is a Date, whose time value is NaN.
 *
 * @public
 */
export declare function isValid(date: Date): boolean;
/**
 * Is the given Jalali date valid?
 *
 * @public
 */
export declare function isValidJalaaliDate(jy: number, jm: number, jd: number): boolean;
/**
 * Is the first date before the second one?
 *
 * @public
 */
export declare function isBefore(dateLeft: Date, dateRight: Date): boolean;
/**
 * Is the first date after the second one?
 *
 * @public
 */
export declare function isAfter(dateLeft: Date, dateRight: Date): boolean;
/**
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://git.io/fxCyr
 *
 * @public
 */
export declare function format(date: Date | number, formatBy: string): string;
/**
 * Are the given dates equal?
 *
 * @public
 */
export declare function isEqual(dateLeft: Date | number, dateRight: Date | number): boolean;
/**
 * Returns the current Year
 *
 * @public
 */
export declare function getCurrentYear(): number;
export declare type CurrentDateObject = Required<Record<keyof PickerDateModel, number>>;
/**
 * Converts date instance string to an object.
 * The result may vary by locale.
 *
 * @public
 */
export declare function currentDateObject(): CurrentDateObject;
/**
 * Check if the entered year is Leap
 *
 * @public
 */
export declare function isLeapYear(year: number): boolean;
/**
 * Calculate the minimum year items which picker should render in Year Column
 *
 * @public
 * @example
 * assume that currentYear is 1400
 * startYear(1380) // 20(currentYear - 1380)
 */
export declare function startYear(year: number): number;
/**
 * Calculate the maximum year items which picker should render in Year Column
 *
 * @public
 * @example
 * assume that currentYear is 1400
 * endYear(1410) // 10(year - currentYear)
 */
export declare function endYear(year: number): number;
/**
 * Combines and Generates all picker columns value
 *
 * @private
 */
export declare const pickerData: Record<string, (inp?: any) => Array<PickerItemModel>>;
