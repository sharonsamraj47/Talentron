import React from "react";
import { Helmet } from "react-helmet";

const Head = ({ title, cssFile }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{title}</title>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.10.5/font/bootstrap-icons.min.css"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
        rel="stylesheet"
      />

      {cssFile && <link href={`../src/styles/${cssFile}`} rel="stylesheet" />}
    </Helmet>
  );
};

export default Head;
