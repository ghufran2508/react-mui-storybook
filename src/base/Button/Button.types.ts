export interface ActiveButtonProps {
    text?: string | undefined,
    type?: string | undefined,
    startIcon?: React.ReactNode | undefined,
    endIcon?: React.ReactNode | undefined,
    sx?: object | undefined,
    component?: React.ElementType<any>
    onClick?: React.MouseEventHandler<HTMLDivElement> | undefined,
    disabled?: boolean ,
    href?: string,
    size?: "small" | "medium" | "large",
    fullWidth?: boolean
}