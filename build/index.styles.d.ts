/// <reference types="react" />
import { Theme } from './index.types';
export declare const StyledFooter: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const StyledSubmitButton: import("styled-components").StyledComponent<"button", any, {
    fullWidth: boolean;
}, never>;
export declare const StyledCancelButton: import("styled-components").StyledComponent<"button", any, {}, never>;
export declare const StyledSheet: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<{
    isOpen: boolean;
    children: import("react").ReactNode;
    onClose: () => void;
    rootId?: string | undefined;
    snapPoints?: number[] | undefined;
    initialSnap?: number | undefined;
    springConfig?: import("popmotion").SpringOptions | undefined;
    disableDrag?: boolean | undefined;
} & import("react-modal-sheet/dist/types").SheetEvents & import("react").HTMLAttributes<HTMLDivElement> & import("react").RefAttributes<any>> & {
    Container: import("react").ForwardRefExoticComponent<Pick<import("framer-motion").MotionProps, "style" | "onDrag" | "onDragEnd" | "onDragStart" | "onAnimationStart" | "inherit" | "layout" | "drag" | "transformTemplate" | "transformValues" | "variants" | "transition" | "onViewportBoxUpdate" | "onBeforeLayoutMeasure" | "onLayoutMeasure" | "onUpdate" | "onLayoutAnimationComplete" | "onUnmount" | "onPan" | "onPanStart" | "onPanSessionStart" | "onPanEnd" | "onTap" | "onTapStart" | "onTapCancel" | "whileTap" | "whileHover" | "onHoverStart" | "onHoverEnd" | "whileFocus" | "whileDrag" | "dragDirectionLock" | "dragPropagation" | "dragConstraints" | "dragElastic" | "dragMomentum" | "dragTransition" | "dragControls" | "dragListener" | "onMeasureDragConstraints" | "_dragX" | "_dragY" | "onDirectionLock" | "onDragTransitionEnd" | "layoutId" | "custom"> & {
        children: import("react").ReactNode;
    } & import("react").RefAttributes<any>>;
    Header: import("react").ForwardRefExoticComponent<Pick<import("framer-motion").MotionProps, "style" | "animate" | "onAnimationStart" | "inherit" | "initial" | "layout" | "transformTemplate" | "transformValues" | "variants" | "transition" | "onViewportBoxUpdate" | "onBeforeLayoutMeasure" | "onLayoutMeasure" | "onUpdate" | "onLayoutAnimationComplete" | "onPan" | "onPanStart" | "onPanSessionStart" | "onPanEnd" | "onTap" | "onTapStart" | "onTapCancel" | "whileTap" | "whileHover" | "onHoverStart" | "onHoverEnd" | "whileFocus" | "whileDrag" | "dragDirectionLock" | "dragPropagation" | "dragTransition" | "dragControls" | "dragListener" | "onMeasureDragConstraints" | "_dragX" | "_dragY" | "onDirectionLock" | "onDragTransitionEnd" | "layoutId" | "custom" | "onAnimationComplete" | "exit"> & {
        children?: import("react").ReactNode;
        disableDrag?: boolean | undefined;
    } & import("react").RefAttributes<any>>;
    Content: import("react").ForwardRefExoticComponent<Pick<import("framer-motion").MotionProps, "style" | "animate" | "onAnimationStart" | "inherit" | "initial" | "layout" | "transformTemplate" | "transformValues" | "variants" | "transition" | "onViewportBoxUpdate" | "onBeforeLayoutMeasure" | "onLayoutMeasure" | "onUpdate" | "onLayoutAnimationComplete" | "onPan" | "onPanStart" | "onPanSessionStart" | "onPanEnd" | "onTap" | "onTapStart" | "onTapCancel" | "whileTap" | "whileHover" | "onHoverStart" | "onHoverEnd" | "whileFocus" | "whileDrag" | "dragDirectionLock" | "dragPropagation" | "dragTransition" | "dragControls" | "dragListener" | "onMeasureDragConstraints" | "_dragX" | "_dragY" | "onDirectionLock" | "onDragTransitionEnd" | "layoutId" | "custom" | "onAnimationComplete" | "exit"> & {
        children?: import("react").ReactNode;
        disableDrag?: boolean | undefined;
    } & import("react").RefAttributes<any>>;
    Backdrop: import("react").ForwardRefExoticComponent<Pick<import("framer-motion").MotionProps, "style" | "onDrag" | "onDragEnd" | "onDragStart" | "onAnimationStart" | "inherit" | "layout" | "drag" | "transformTemplate" | "transformValues" | "variants" | "transition" | "onViewportBoxUpdate" | "onBeforeLayoutMeasure" | "onLayoutMeasure" | "onUpdate" | "onLayoutAnimationComplete" | "onPan" | "onPanStart" | "onPanSessionStart" | "onPanEnd" | "onTap" | "onTapStart" | "onTapCancel" | "whileTap" | "whileHover" | "onHoverStart" | "onHoverEnd" | "whileFocus" | "whileDrag" | "dragDirectionLock" | "dragPropagation" | "dragConstraints" | "dragElastic" | "dragMomentum" | "dragTransition" | "dragControls" | "dragListener" | "onMeasureDragConstraints" | "_dragX" | "_dragY" | "onDirectionLock" | "onDragTransitionEnd" | "layoutId" | "custom" | "onAnimationComplete"> & import("react").RefAttributes<any>>;
}, any, {
    theme: Theme;
}, never>;
export declare const StyledSheetContainer: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<Pick<import("framer-motion").MotionProps, "style" | "onDrag" | "onDragEnd" | "onDragStart" | "onAnimationStart" | "inherit" | "layout" | "drag" | "transformTemplate" | "transformValues" | "variants" | "transition" | "onViewportBoxUpdate" | "onBeforeLayoutMeasure" | "onLayoutMeasure" | "onUpdate" | "onLayoutAnimationComplete" | "onUnmount" | "onPan" | "onPanStart" | "onPanSessionStart" | "onPanEnd" | "onTap" | "onTapStart" | "onTapCancel" | "whileTap" | "whileHover" | "onHoverStart" | "onHoverEnd" | "whileFocus" | "whileDrag" | "dragDirectionLock" | "dragPropagation" | "dragConstraints" | "dragElastic" | "dragMomentum" | "dragTransition" | "dragControls" | "dragListener" | "onMeasureDragConstraints" | "_dragX" | "_dragY" | "onDirectionLock" | "onDragTransitionEnd" | "layoutId" | "custom"> & {
    children: import("react").ReactNode;
} & import("react").RefAttributes<any>>, any, {
    className: string;
}, never>;
export declare const StyledSheetHeader: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<Pick<import("framer-motion").MotionProps, "style" | "animate" | "onAnimationStart" | "inherit" | "initial" | "layout" | "transformTemplate" | "transformValues" | "variants" | "transition" | "onViewportBoxUpdate" | "onBeforeLayoutMeasure" | "onLayoutMeasure" | "onUpdate" | "onLayoutAnimationComplete" | "onPan" | "onPanStart" | "onPanSessionStart" | "onPanEnd" | "onTap" | "onTapStart" | "onTapCancel" | "whileTap" | "whileHover" | "onHoverStart" | "onHoverEnd" | "whileFocus" | "whileDrag" | "dragDirectionLock" | "dragPropagation" | "dragTransition" | "dragControls" | "dragListener" | "onMeasureDragConstraints" | "_dragX" | "_dragY" | "onDirectionLock" | "onDragTransitionEnd" | "layoutId" | "custom" | "onAnimationComplete" | "exit"> & {
    children?: import("react").ReactNode;
    disableDrag?: boolean | undefined;
} & import("react").RefAttributes<any>>, any, {
    className: string;
}, never>;
export declare const StyledSheetContent: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<Pick<import("framer-motion").MotionProps, "style" | "animate" | "onAnimationStart" | "inherit" | "initial" | "layout" | "transformTemplate" | "transformValues" | "variants" | "transition" | "onViewportBoxUpdate" | "onBeforeLayoutMeasure" | "onLayoutMeasure" | "onUpdate" | "onLayoutAnimationComplete" | "onPan" | "onPanStart" | "onPanSessionStart" | "onPanEnd" | "onTap" | "onTapStart" | "onTapCancel" | "whileTap" | "whileHover" | "onHoverStart" | "onHoverEnd" | "whileFocus" | "whileDrag" | "dragDirectionLock" | "dragPropagation" | "dragTransition" | "dragControls" | "dragListener" | "onMeasureDragConstraints" | "_dragX" | "_dragY" | "onDirectionLock" | "onDragTransitionEnd" | "layoutId" | "custom" | "onAnimationComplete" | "exit"> & {
    children?: import("react").ReactNode;
    disableDrag?: boolean | undefined;
} & import("react").RefAttributes<any>>, any, {
    className: string;
}, never>;
