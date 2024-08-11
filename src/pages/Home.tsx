import React from "react"
import { Box, Container, Heading, Text } from "@chakra-ui/react"

const Home: React.FC = () => {
  return (
    <Container maxW="container.md" py={10}>
      <Box textAlign="center">
        <Heading as="h1" size="xl" mb={6}>
          Welcome to Voicinger
        </Heading>
        <Text fontSize="lg">
          This is a simple page built with React, TypeScript, and Chakra UI.
          Here is some random text to fill the space:
        </Text>
        <Text fontSize="md" mt={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
          quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
          mauris.
        </Text>
      </Box>
    </Container>
  )
}

export default Home
