import { Checkbox, Divider, FormControlLabel, FormGroup, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { ActiveButton, AuthButton, MyLink, PrimaryTextField } from "../../base";
import { Apple, Google, Microsoft, RemoveRedEyeOutlined, VisibilityOff } from "@mui/icons-material";
// import Apple from './../../Utils/Icons/apple.jpg'
// import Google from './../../Utils/Icons/google.png'
// import Microsoft from './../../Utils/Icons/microsoft.png'
import { Ilogin } from "./Login.types";

const pointerStyle = {
    cursor: 'pointer'
}

const Login = ({
    handleSubmit,
    error,
    allowThirdParty,
    onGoogleClick,
    onMicrosoftClick,
    onAppleClick
}: Ilogin) => {
    const [watchPassword, setWatchPassword] = React.useState(false);
    const [errorMsg, setErrorMsg] = React.useState(error)

    const toogleWatchPassword = () => {
        setWatchPassword(prev => !prev);
    }

    const handleFormSubmit = (e: any) => {
        e.preventDefault();
        const email = e.target[0].value
        const password = e.target[2].value
        const keep = e.target[4].checked
        if (handleSubmit)
            handleSubmit({ email, password, keep })
    }

    return (
        <Box
            sx={{
                width: '100vw',
                maxWidth: '450px',
                py: 5,
                px: 3,
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
                border: '1px solid grey',
                borderRadius: '20px',
                gap: '25px',
                boxSizing: 'border-box'
            }}
            component={'form'}
            onSubmit={handleFormSubmit}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                }}
            >
                <Typography fontSize={'30px'} fontWeight={'600'}>
                    Login
                </Typography>
                <MyLink to={'/sign-up'} text="Don't have an account?" underline={false} />
            </Box>

            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px'
                }}
            >
                <Typography>
                    Email
                </Typography>
                <PrimaryTextField
                    placeholder="Enter email address*"
                    type="email"
                    required={true}
                />
            </Box>

            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px'
                }}
            >
                <Typography>
                    Password
                </Typography>
                <PrimaryTextField
                    placeholder="Enter password*"
                    type={!watchPassword ? "password" : "text"}
                    endingicon={!watchPassword ? <RemoveRedEyeOutlined sx={pointerStyle} onClick={toogleWatchPassword} /> : <VisibilityOff sx={pointerStyle} onClick={toogleWatchPassword} />}
                    required={true}
                />
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                }}
            >
                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="Keep me signed in" />
                </FormGroup>

                <MyLink to={'/forgot-password'} text="Forgot password?" underline={false} />
            </Box>

            {errorMsg && <Typography color={'error'}>{errorMsg}</Typography>}

            <ActiveButton text="Log In" fullWidth type="submit" />

            <Divider sx={{ width: '80%' }} />

            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <Box
                    sx={{
                        width: '90%',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px'
                    }}
                >
                    <AuthButton
                        text="Continue with Google"
                        authIcon={<Google />}
                        onClick={onGoogleClick}
                    />
                    <AuthButton
                        text="Continue with Microsoft Account"
                        authIcon={<Microsoft />}
                        onClick={onMicrosoftClick}
                    />
                    <AuthButton
                        text="Continue with Apple"
                        authIcon={<Apple />}
                        onClick={onAppleClick}
                    />
                </Box>
            </Box>
        </Box>
    )
}

export default Login;