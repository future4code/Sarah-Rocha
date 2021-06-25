import React from "react";
import { Typography } from "@material-ui/core";

const CardTitle = (props) => {
    return <Typography variant="h5" gutterBottom>{props.title}</Typography>
}

export default CardTitle;