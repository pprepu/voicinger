import { extendTheme } from "@chakra-ui/react"
const colors = {
  mainLight: { 500: "#7FA1C3" },
  mainDark: { 500: "#6482AD" },
}

const theme = extendTheme({
  colors,
  styles: {
    global: {
      body: {
        bg: "#F5EDED",
      },
    },
  },
})

export default theme
