import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { setupInterceptors } from "./utils/service";
import CustomRouter from "./utils/customRouter";
import history from "./utils/history";
import ErrorBoundary from "./pages/common/ErrorBoundary";
import "./assets/css/App.css";
import "./assets/css/MiniCalendar.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";

setupInterceptors(store);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);
root.render(
  <ChakraProvider theme={theme}>
    <ErrorBoundary>
      <Provider store={store}>
        <CustomRouter history={history}>
          <App />
        </CustomRouter>
      </Provider>
    </ErrorBoundary>
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
