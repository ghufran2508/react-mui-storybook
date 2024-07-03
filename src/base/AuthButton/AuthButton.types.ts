export interface IAuthButton {
    authIcon?: React.ReactNode,
    text: string,
    onClick?: () => void,
    fullWidth?: boolean,
    loading?: boolean,
    disabled?: boolean,
}