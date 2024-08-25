import React from "react"
import { Box, Container } from "@chakra-ui/react"
import Quizzer from "../components/quizzer"

const Home: React.FC = () => {
  return (
    <Container maxW="container.md" py={10}>
      <Box textAlign="center">
        <Quizzer />
      </Box>
    </Container>
  )
}

export default Home
