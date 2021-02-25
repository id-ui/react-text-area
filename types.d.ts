import * as React from 'react';

export interface TextAreaStateColorsSet {
    border?: string;
    color?: string;
    background?: string;
}

export interface TextAreaColors {
    default?: TextAreaStateColorsSet;
    disabled?: TextAreaStateColorsSet;
    error?: TextAreaStateColorsSet;
    focused?: {
        border?: string
    };
}

export interface TextAreaProps {
    /**
     *
     */
    value?: string;
    /**
     *
     */
    disabled?: boolean;
    /**
     *
     */
    withError?: boolean;
    /**
     *
     */
    autoHeight?: boolean;
    /**
     *
     */
    onChange?: (value: string) => void;
    /**
     *
     */
    className?: string;
    /**
     *
     */
    rows?: number;
    /**
     *
     */
    maxHeight?: string;
    /**
     *
     */
    colors?: TextAreaColors;
}

export default class TextArea extends React.Component<TextAreaProps> {}