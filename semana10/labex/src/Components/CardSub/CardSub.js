import React from "react";
import { Typography } from "@material-ui/core";

const CardSub = (props) => {
    return <Typography variant="subtitle1" component="h2">{props.sub}</Typography>
}

export default CardSub;