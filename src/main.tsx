import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { routes } from "./routes";

import {
  ChakraProvider,
  createSystem,
  defaultConfig,
  defineConfig,
} from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

const customConfig = defineConfig({
  globalCss: {
    html: {
      height: "100%",
      scrollBehavior: "smooth",
    },
    body: {
      height: "100%",
    },
    "#root": {
      height: "100%",
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider value={createSystem(defaultConfig, customConfig)}>
      <BrowserRouter>{routes}</BrowserRouter>
    </ChakraProvider>
  </StrictMode>,
);
