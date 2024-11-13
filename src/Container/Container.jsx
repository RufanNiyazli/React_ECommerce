import React from "react";
import Container from "@material-ui/core/Container";
function Container({ children }) {
  return (
    <div>
      <Container maxWidth="sm">{children}</Container>
    </div>
  );
}

export default Container;
