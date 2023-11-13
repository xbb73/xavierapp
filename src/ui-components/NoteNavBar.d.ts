/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type NoteNavBarOverridesProps = {
    NoteNavBar?: PrimitiveOverrideProps<FlexProps>;
    Logo40501726?: PrimitiveOverrideProps<FlexProps>;
    "Star 1"?: PrimitiveOverrideProps<IconProps>;
    Logo40501728?: PrimitiveOverrideProps<TextProps>;
    "Frame 321"?: PrimitiveOverrideProps<FlexProps>;
    Company?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type NoteNavBarProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: NoteNavBarOverridesProps | undefined | null;
}>;
export default function NoteNavBar(props: NoteNavBarProps): React.ReactElement;
