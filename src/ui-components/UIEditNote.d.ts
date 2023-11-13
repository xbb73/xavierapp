/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, DividerProps, FlexProps, IconProps, ImageProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UIEditNoteOverridesProps = {
    UIEditNote?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    "Edit Profile"?: PrimitiveOverrideProps<FlexProps>;
    Icon?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    Edit?: PrimitiveOverrideProps<TextProps>;
    Divider40501868?: PrimitiveOverrideProps<DividerProps>;
    Profile?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Upload New Image"?: PrimitiveOverrideProps<TextProps>;
    Forms?: PrimitiveOverrideProps<FlexProps>;
    TextField40501873?: PrimitiveOverrideProps<TextFieldProps>;
    TextField40501874?: PrimitiveOverrideProps<TextFieldProps>;
    TextField40501875?: PrimitiveOverrideProps<TextFieldProps>;
    Divider40501876?: PrimitiveOverrideProps<DividerProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type UIEditNoteProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: UIEditNoteOverridesProps | undefined | null;
}>;
export default function UIEditNote(props: UIEditNoteProps): React.ReactElement;
