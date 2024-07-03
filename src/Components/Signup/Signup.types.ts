export interface ISignup {
    handleSubmit?: Function,
    error?: string,
    allowThirdParty?: boolean,
    onGoogleClick?: () => void,
    onMicrosoftClick?: () => void,
    onAppleClick?: () => void
}