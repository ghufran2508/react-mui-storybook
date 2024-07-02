import { Checkbox, FormControlLabel, FormGroup, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { ActiveButton, MyLink, PrimaryTextField } from "../../base";
import { Apple, Google, Microsoft, RemoveRedEyeOutlined, VisibilityOff } from "@mui/icons-material";
import { AuthButton } from "../../base";
import { ISignup } from "./Signup.types";

const pointerStyle = {
    cursor: 'pointer'
}

const Signup = ({
    handleSubmit,
    error
}: ISignup) => {
    const [watchPassword, setWatchPassword] = React.useState(false);
    const [watchConfirmPassword, setWatchConfirmPassword] = React.useState(false);
    const [errorMsg, setErrorMsg] = React.useState(error)

    const toogleWatchPassword = () => {
        setWatchPassword(prev => !prev);
    }

    const toogleWatchConfirmPassword = () => {
        setWatchConfirmPassword(prev => !prev);
    }

    const handleFormSubmit = (e: any) => {
        e.preventDefault();
        const email = e.target[0].value
        const password = e.target[2].value
        const confirmPassword = e.target[4].value
        if (password !== confirmPassword) {
            setErrorMsg('Password does not match')
            return;
        }
        const keep = e.target[4].checked
        if (handleSubmit)
            handleSubmit({ email, password, keep })
    }

    return (
        <Box
            sx={{
                width: '100vw',
                maxWidth: '500px',
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
                    Signup
                </Typography>
                <MyLink to={'/sign-up'} text="Already have an account?" underline={false} />
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
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px'
                }}
            >
                <Typography>
                    Confirm Password
                </Typography>
                <PrimaryTextField
                    placeholder="Enter password*"
                    type={!watchConfirmPassword ? "password" : "text"}
                    endingicon={!watchConfirmPassword ? <RemoveRedEyeOutlined sx={pointerStyle} onClick={toogleWatchConfirmPassword} /> : <VisibilityOff sx={pointerStyle} onClick={toogleWatchConfirmPassword} />}
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
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Keep me signed in" />
                </FormGroup>

            </Box>

            {errorMsg && <Typography color={'error'}>{errorMsg}</Typography>}

            <ActiveButton text="Sign up" fullWidth type="submit" />

            <hr />

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
                    <AuthButton text="Continue with Google" onClick={() => { }} authIcon={<Google />} />
                    <AuthButton text="Continue with Microsoft Account" onClick={() => { }} authIcon={<Microsoft />} />
                    <AuthButton text="Continue with Apple" onClick={() => { }} authIcon={<Apple />} />
                </Box>
            </Box>
        </Box>
    )
}

export default Signup;