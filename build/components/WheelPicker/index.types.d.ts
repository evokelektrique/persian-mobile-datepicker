import { CSSProperties, ReactNode } from 'react';
export declare type EventTypes = 'solar' | 'persian';
export interface Event {
    type: EventTypes;
    title: string;
}
export interface WheelPickerSelectEvent {
    date: Date;
    events: Array<Event>;
    object: PickerDateModel;
}
export interface WheelPickerProps {
    /**
     * CSS classnames prefix
     *
     * @default persian-datepicker
     */
    classNamePrefix?: string;
    /**
     * Initial picker value
     *
     * @default null
     */
    initialValue?: Date;
    /**
     * Current picker value
     *
     * @default null
     */
    value?: WheelPickerSelectEvent;
    /**
     * WheelPicker title
     *
     * @default null
     */
    title?: ReactNode;
    /**
     * Gets called when value of the picker changes
     */
    onChange?: (selected: WheelPickerSelectEvent) => void;
    /**
     * Set config to configure year, month, day, hour, minute and seconds
     *
     * @default {}
     */
    config: DatePickerConfig;
    /**
     * Specifies the minimum selectable day by user
     *
     * @default null
     * @type {Date}
     */
    minDate?: Date;
    /**
     * Specifies the maximum selectable day by user
     *
     * @default null
     * @type {Date}
     */
    maxDate?: Date;
    /**
     * The Minimum selectable year
     *
     * @description Picker will calculate the StartYear by this approach: currentYear + endYear
     * @default currentYear + 30 next year
     * @type {number}
     */
    endYear?: number;
    /**
     * The Maximum selectable year
     *
     * @description Picker will calculate the StartYear by this approach: currentYear - startYear
     * @default currentYear - 30 years ago
     * @type {number}
     */
    startYear?: number;
    /**
     * Determines whether to mark weekend days with red or not. (weekend day is Friday)
     *
     * @default false
     * @type {boolean}
     */
    highlightWeekends?: boolean;
    /**
     * Determines whether to mark holidays in day column.
     *
     * @default false
     * @type {boolean}
     */
    highlightHolidays?: boolean;
    /**
     * Add the name of the day of the week
     *
     * @default false
     */
    addDayName?: boolean;
}
export declare type DateConfigTypes = 'year' | 'month' | 'day' | 'hour' | 'minute' | 'second';
export declare type DateConfigFormats = 'YYYY' | 'YY' | 'MM' | 'DD' | 'hh' | 'mm' | 'ss';
export declare type WeekDayText = 'شنبه' | 'یک‌شنبه' | 'دو‌شنبه' | 'سه‌شنبه' | 'چهار‌شنبه' | 'پنج‌شنبه' | 'جمعه';
export interface PickerColumnCaption {
    text: string;
    style?: CSSProperties;
}
export declare type PickerSelectedDateValue = number;
export interface DateConfigValuesModel {
    caption?: PickerColumnCaption;
    formatter?: (value: RequiredPickerExtraDateInfo) => PickerSelectedDateValue | string;
    classname?: (value: RequiredPickerExtraDateInfo) => string | string[];
    shouldRender?: (value: RequiredPickerExtraDateInfo) => boolean;
    columnStyle?: CSSProperties;
    itemStyle?: CSSProperties;
    selectedItemStyle?: CSSProperties;
}
export declare type DatePickerConfig = Partial<{
    [key in DateConfigTypes]: DateConfigValuesModel;
}>;
export interface PickerDateModel {
    year?: PickerSelectedDateValue;
    month?: PickerSelectedDateValue;
    day?: PickerSelectedDateValue;
    hour?: PickerSelectedDateValue;
    minute?: PickerSelectedDateValue;
    second?: PickerSelectedDateValue;
}
export declare type RequiredPickerDateModel = Required<PickerDateModel>;
export interface PickerExtraDateInfo extends PickerDateModel {
    /**
     * The day of the week of the given date.
     *
     * @description 0 represents Saturday(شنبه) and 6 represents Friday(جمعه)
     */
    weekDay?: number;
    weekDayText?: WeekDayText;
    monthText?: string;
    dayOfYear?: number;
    isLeapYear?: boolean;
    isHoliday?: boolean;
}
export declare type RequiredPickerExtraDateInfo = Required<PickerExtraDateInfo>;
export interface PickerItemModel<V = PickerSelectedDateValue> {
    type: DateConfigTypes;
    value: V;
}
export declare type PickerColumns = Array<PickerItemModel<Array<PickerItemModel>>>;
