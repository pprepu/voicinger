import React from "react"
import { Box, Container, Heading, Text } from "@chakra-ui/react"
import Quizzer from "../components/quizzer"

const Home: React.FC = () => {
  return (
    <Container maxW="container.md" py={10}>
      <Box textAlign="center">
        <Heading as="h1" size="xl" mb={6}>
          Voicinger
        </Heading>
        
        <Quizzer />
      </Box>
     
    </Container>
  )
}

export default Home
