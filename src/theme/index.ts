import { extendTheme } from "@chakra-ui/react"
export const colors = {
  mainLight: { 500: "#7FA1C3" },
  mainDark: { 500: "#6482AD" },
  background: {
    100: "#F5EDED",
    400: "#E2DAD6",
  },
}

const theme = extendTheme({
  colors,
  styles: {
    global: {
      body: {
        bg: colors.background[100],
      },
    },
  },
})

export default theme
