import React from "react";
import { Button } from "@mui/material";
import { ActiveButtonProps } from "./Button.types";

const ActiveButton = ({
    text,
    onClick,
    type = "button",
    startIcon,
    endIcon,
    sx,
    component = 'button',
    href,
    size,
    fullWidth
}: ActiveButtonProps) => (
    <Button
        sx={{
            padding: "8px",
            color: 'white',
            borderRadius: "5px",
            backgroundColor: '#4c78ae',
            textTransform: "none",
            ":hover": {
                backgroundColor: '#4c78ae',
            },
            ...sx,
        }}
        component={component}
        onClick={onClick}
        type={type}
        startIcon={startIcon}
        endIcon={endIcon}
        href={href}
        size={size}
        fullWidth={fullWidth}
    >
        {text}
    </Button>
);

export default ActiveButton;
