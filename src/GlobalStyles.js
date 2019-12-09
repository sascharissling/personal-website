import React from "react";
import { Global, css } from "@emotion/core";
export default function GlobalStyles() {
  return (
    <Global
      styles={css`
        *,
        *::after,
        *::before {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: "Source Sans Pro", sans-serif;
          background: #f7f8f7;
        }

        /* width */
        *::-webkit-scrollbar {
          width: 5px;
        }

        /* Track */
        *::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        /* Handle */
        *::-webkit-scrollbar-thumb {
          background: #ff4500;
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
          background: #ff4500;
        }
      `}
    />
  );
}

//FONTS
// font-family: 'Abril Fatface', cursive;
// font-family: "Merriweather", serif;
// font-family: 'Source Sans Pro', sans-serif;
