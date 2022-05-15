import React from "react";
import Button from "@mui/material/Button";

export default function ButtonContained(props) {
  const { text, size, onClick, ...other } = props;

  return (
    <Button
      variant="contained"
      onClick={onClick}
      {...other}
    >
      {text}
    </Button>
  );
}
