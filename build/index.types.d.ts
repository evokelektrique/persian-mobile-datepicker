import type { WheelPickerProps, WheelPickerSelectEvent } from './components/WheelPicker/index.types';
export declare type Theme = 'dark' | 'light' | 'auto';
export interface PickerProps extends WheelPickerProps {
    /**
     * Picker Theme
     *
     * @default light
     */
    theme?: Theme;
    /**
     * Picker open status
     *
     * @default false
     */
    isOpen: boolean;
    onClose?: () => void;
    onCancel?: () => void;
    /**
     * Submit button text
     *
     * @default تایید
     */
    submitText?: string;
    /**
     * Cancel button text
     *
     * @default انصراف
     */
    cancelText?: string;
    onSubmit: (selected: WheelPickerSelectEvent) => void;
    /**
     * Display Cancel button
     *
     * @default true
     */
    showCancelButton?: boolean;
    /**
     * Disable drag for the sheet content.
     *
     * @default true
     */
    disableSheetDrag?: boolean;
    /**
     * Disable drag for the sheet header.
     *
     * @default false
     */
    disableSheetHeaderDrag?: boolean;
    /**
     * Height of Picker Sheet modal
     *
     * @default 385
     */
    height?: number;
}
