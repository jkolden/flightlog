import React from "react";

import Typography from "@material-ui/core/Typography";

import Link from "@material-ui/core/Link";
import { Divider } from "@material-ui/core";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://oracle.com/">
        Oracle Demo Engineering
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

export default Copyright;
