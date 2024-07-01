import { Checkbox, FormControlLabel, FormGroup, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import { ActiveButton, PrimaryTextField } from "../../base";
import { RemoveRedEyeOutlined } from "@mui/icons-material";

const Login = () => {
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
                gap: '10px',
                boxSizing: 'border-box'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                }}
            >
                <Typography>
                    Login
                </Typography>
                <Link to={'/sign-up'}>Don't Have an account?</Link>
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
                    endingicon={<RemoveRedEyeOutlined />}
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
                    type="password"
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

                <Link to={'/sign-up'}>Don't Have an account?</Link>
            </Box>

            <ActiveButton text="Log In" fullWidth/>
        </Box>
    )
}

export default Login;