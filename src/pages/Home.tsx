import React from "react"
import { Box, Container } from "@chakra-ui/react"
import Quizzer from "../components/quizzer"

const Home: React.FC = () => {
  return (
    <Container
      maxW="container.md"
      py={{ base: 6, md: 10 }} // Responsive padding
      px={{ base: 4, md: 6 }} // Responsive padding for smaller screens
    >
      <Box
        textAlign="center"
        borderRadius="md" // Rounded corners
        boxShadow="sm" // Small shadow for depth
        p={{ base: 4, md: 8 }} // Responsive padding
        bg="#E2DAD6" // Background color
        _hover={{ boxShadow: "md" }} // Hover effect
        transition="box-shadow 0.2s" // Smooth transition for hover effect
      >
        <Quizzer />
      </Box>
    </Container>
  )
}

export default Home
