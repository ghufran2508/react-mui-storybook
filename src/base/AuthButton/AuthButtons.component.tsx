import React from "react";
import { Button } from "@mui/material";
import { IAuthButton } from "./AuthButton.types";

const AuthButton = ({
    authIcon,
    text,
    onClick,
    fullWidth,
    disabled
}: IAuthButton) => (
    <Button
        onClick={onClick}
        startIcon={authIcon}
        fullWidth={fullWidth}
        disabled={disabled}

        variant="outlined"

        sx={{
            borderRadius: '10px',
            border: '1px solid grey',
            p: 2,
            justifyContent: 'flex-start',
            color: 'black',
            textTransform: 'none'
        }}
    >
        {}
        {text}
    </Button>
);

export default AuthButton;
