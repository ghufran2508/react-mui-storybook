export interface Ilogin {
    handleSubmit?: Function,
    error?: string,
    allowThirdParty?: boolean,
    onGoogleClick?: () => void,
    onMicrosoftClick?: () => void,
    onAppleClick?: () => void
}