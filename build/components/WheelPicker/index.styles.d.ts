/// <reference types="react" />
export declare const GlobalStyle: import("styled-components").GlobalStyleComponent<{}, import("styled-components").DefaultTheme>;
export declare type CaptionProps = {
    columnSize: number;
};
export declare const StyledCaption: import("styled-components").StyledComponent<"div", any, CaptionProps, never>;
export declare const StyledTitle: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const StyledWheelPicker: import("styled-components").StyledComponent<{
    new (props?: import("rmc-picker/es/PickerTypes").IPickerProps | undefined, context?: any): {
        select: (value: any, itemHeight: any, scrollTo: any) => void;
        selectByIndex(index: any, itemHeight: any, zscrollTo: any): void;
        computeChildIndex(top: any, itemHeight: any, childrenLength: any): number;
        doScrollingComplete: (top: any, itemHeight: any, fireValueChange: any) => void;
        render(): JSX.Element;
        setState<K extends string | number | symbol>(state: any, callback?: (() => any) | undefined): void;
        forceUpdate(callBack?: (() => any) | undefined): void;
        props: Readonly<{
            children?: import("react").ReactNode;
        }> & Readonly<import("rmc-picker/es/PickerTypes").IPickerProps>;
        state: Readonly<any>;
        context: any;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        componentWillMount?(): void;
        componentDidMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<import("rmc-picker/es/PickerTypes").IPickerProps>, nextContext: any): void;
        shouldComponentUpdate?(nextProps: Readonly<import("rmc-picker/es/PickerTypes").IPickerProps>, nextState: Readonly<any>, nextContext: any): boolean;
        componentWillUpdate?(nextProps: Readonly<import("rmc-picker/es/PickerTypes").IPickerProps>, nextState: Readonly<any>, nextContext: any): void;
        componentDidUpdate?(prevProps: Readonly<import("rmc-picker/es/PickerTypes").IPickerProps>, prevState: Readonly<any>, prevContext: any): void;
        componentWillUnmount?(): void;
    };
    Item: (_props: import("rmc-picker/es/PickerMixin").IItemProps) => any;
}, any, {}, never>;
export declare const StyledWheelPickerItem: import("styled-components").StyledComponent<(_props: import("rmc-picker/es/PickerMixin").IItemProps) => any, any, {}, never>;
