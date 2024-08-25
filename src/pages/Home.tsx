import React from "react"
import { Box, Container } from "@chakra-ui/react"
import Quizzer from "../components/quizzer"

const Home: React.FC = () => {
  return (
    <Container
      maxW={{ base: "100%", md: "container.md" }}
      py={{ base: 4, md: 10 }}
      px={{ base: 2, md: 6 }}
    >
      <Box
        textAlign="center"
        borderRadius="md"
        boxShadow="sm"
        p={{ base: 3, md: 8 }}
        fontSize={{ base: "md", md: "xl" }}
        bg="#E2DAD6"
        _hover={{ boxShadow: "md" }}
        transition="box-shadow 0.2s"
      >
        <Quizzer />
      </Box>
    </Container>
  )
}

export default Home
