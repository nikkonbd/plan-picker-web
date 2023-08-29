import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { RouterProvider } from "react-router-dom";

import router from "./allrouter/Router";
import AuthProvider from "./providers/AuthProvider";
import AOS from "aos";
import "aos/dist/aos.css";
import { Provider } from "react-redux";
import store from "./store/store";

AOS.init();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
