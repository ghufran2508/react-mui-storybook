import React from "react";
import { Link } from "react-router-dom";
import { IMyLink } from "./Link.types";

const MyLink = ({
    text,
    to,
    target,
    underline,
    color,
    disabled
}: IMyLink) => {
    return (
        <Link
            to={to}
            target={target}
            style={{
                color,
                textDecoration: underline ? "underline" : "none",
                pointerEvents: disabled ? "none" : "auto"
            }}
        >
            {text}
        </Link>
    )
}

export default MyLink