import React from "react";
import { useTheme } from "@material-ui/core/styles";

import SignatureCanvas from "react-signature-canvas";

const Signature = () => {
  const theme = useTheme();

  return (
    <SignatureCanvas
      penColor={theme.palette.type == "light" ? "black" : "white"}
      canvasProps={{ width: 500, height: 200, className: "sigCanvas" }}
    />
  );
};

export default Signature;
