import * as React from "react"
import { createRoot } from "react-dom/client"
import { ChakraProvider } from "@chakra-ui/react"
import App from "./App.tsx"
import theme from "./theme/index.ts"

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
