import * as React from 'react';

export interface TextAreaStateColorsSet {
    border?: string;
    color?: string;
    background?: string;
    outline?: string;
    placeholder?: string;
}

export interface TextAreaColors {
    default?: TextAreaStateColorsSet;
    disabled?: TextAreaStateColorsSet;
    error?: TextAreaStateColorsSet;
}

export interface TextAreaProps {
    /**
     * TextArea value
     */
    value?: string;
    /**
     * whether TextArea disabled or not
     * @default false
     */
    disabled?: boolean;
    /**
     * whether TextArea has error or not
     * @default false
     */
    withError?: boolean;
    /**
     * whether fit TextArea height to content height or not
     * @default false
     */
    autoHeight?: boolean;
    /**
     * onChange value handler
     */
    onChange?: (value: string) => void;
    /**
     * TextArea placeholder
     */
    placeholder?: string;
    /**
     * TextArea className
     */
    className?: string;
    /**
     * TextArea rows count
     * @default 3
     */
    rows?: number;
    /**
     * max TextArea height
     */
    maxHeight?: string;
    /**
     * Textarea colors theme for different states (default, disabled, error, focused)
     */
    colors?: TextAreaColors;
}

export default class TextArea extends React.Component<TextAreaProps> {}