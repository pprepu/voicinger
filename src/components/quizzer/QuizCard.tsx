import { Card, CardBody } from "@chakra-ui/react"

interface QuizCardProps {
  setIsStarted: React.Dispatch<React.SetStateAction<boolean>>
  currentQuiz: string
}

const QuizCard: React.FC<QuizCardProps> = ({ setIsStarted, currentQuiz }) => {
  const handleClick = () => {
    setIsStarted((is) => !is)
  }

  return (
    <Card
      align="center"
      justify="center"
      onClick={handleClick}
      cursor="pointer"
      borderWidth="1px"
      borderRadius="md"
      boxShadow="sm"
      p={4}
      _hover={{ boxShadow: "md", transform: "scale(1.05)" }}
      transition="box-shadow 0.2s, transform 0.2s"
      width={{ base: "100%", md: "80%" }}
      mt={4}
      mb={6}
      bg="#7FA1C3"
    >
      <CardBody
        fontSize={{ base: "8xl", md: "8xl" }}
        fontWeight="bold"
        textColor="black"
      >
        {currentQuiz}
      </CardBody>
    </Card>
  )
}

export default QuizCard
