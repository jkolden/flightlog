import React from "react";
import SignatureCanvas from "react-signature-canvas";

const Signature = (props) => {
  return (
    <SignatureCanvas
      penColor={"white"}
      canvasProps={{ width: 500, height: 200, className: "sigCanvas" }}
    />
  );
};

export default Signature;
