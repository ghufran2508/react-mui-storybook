import { TextFieldVariants } from "@mui/material";

export interface TextFieldInterface {
    placeholder?: string | undefined,
    type?: string | undefined,
    value?: string | undefined,
    containError?: boolean | undefined,
    success?: boolean | undefined,
    register?: object | undefined,
    startingicon?: any | undefined,
    endingicon?: any | undefined,
    helperText?: string | undefined,
    required?: boolean | undefined,
    sx?: object | undefined,
    autoComplete?: string | undefined,
    disable?: boolean | undefined,
    multiline?: boolean | undefined,
    children?: any | undefined,
    rows?: number | undefined,
    onClick?: React.MouseEventHandler<HTMLDivElement> | undefined,
    onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined,
}