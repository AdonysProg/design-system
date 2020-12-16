import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled, { ThemeProvider } from "styled-components";
import { Modal } from "./components/";
import { darkTheme, defaultTheme, GlobalStyle } from "./utils";

const Wrapper = styled.div`
  width: 100vh;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
        <button
          style={{
            margin: "0px 16px 24px",
            padding: "8px",
            background: "none",
          }}
          onClick={() => setUseDarkTheme(true)}
        >
          Dark Theme
        </button>
        <button
          style={{
            margin: "0px 16px 24px",
            padding: "8px",
            background: "none",
          }}
          onClick={() => setUseDarkTheme(false)}
        >
          Default Theme
        </button>
        <button
          style={{
            margin: "0px 16px 24px",
            padding: "8px",
            background: "none",
          }}
          onClick={() => setShowModal(!showModal)}
        >
          Show modal
        </button>
        <Wrapper
          style={{
            background: useDarkTheme
              ? darkTheme.primaryColor
              : defaultTheme.primaryColor,
          }}
        >
          <Modal showModal={showModal} setShowModal={setShowModal} />
          <GlobalStyle />
        </Wrapper>
      </ThemeProvider>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
