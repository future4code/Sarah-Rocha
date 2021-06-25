import React from "react";
import { Button } from "@material-ui/core";

const ButtonStyle = (props) => {
    return <Button variant={'contained'} color={'primary'}>{props.button}</Button>
}

export default ButtonStyle;