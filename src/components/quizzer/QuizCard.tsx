import { Card, CardBody, CardFooter, keyframes } from "@chakra-ui/react"
import ProgressBarCustom from "../generic/ProgressBarCustom"

interface QuizCardProps {
  setIsStarted: React.Dispatch<React.SetStateAction<boolean>>
  currentQuiz: string
  animate: boolean
  isStarted: boolean
  progress: number
}

const pulseAnimation = keyframes`
  0% { transform: scale(1); background-color: #7FA1C3; }
  50% { transform: scale(1.1); background-color: #6482AD; }
  100% { transform: scale(1); background-color: #7FA1C3; }
`

const BLURRED_VALUE = "#"

const QuizCard: React.FC<QuizCardProps> = ({
  setIsStarted,
  currentQuiz,
  animate,
  isStarted,
  progress,
}) => {
  const handleClick = () => {
    setIsStarted((is) => !is)
  }

  return (
    <Card
      align="center"
      justify="center"
      onClick={handleClick}
      cursor="pointer"
      borderRadius="md"
      boxShadow="sm"
      p={4}
      _hover={{ boxShadow: "md", transform: "scale(1.03)" }}
      transition="box-shadow 0.2s, transform 0.2s"
      width={{ base: "100%", md: "80%" }}
      mt={4}
      mb={6}
      bg="#7FA1C3"
      animation={animate ? `${pulseAnimation} 0.8s ease-in-out` : undefined}
    >
      <CardBody
        fontSize={{ base: "8xl", md: "8xl" }}
        fontWeight="bold"
        textColor="black"
        letterSpacing="wider"
        sx={!isStarted ? { filter: "blur(30px)" } : undefined}
      >
        {isStarted ? currentQuiz : BLURRED_VALUE}
      </CardBody>
      <CardFooter width="100%" justify="center">
        <ProgressBarCustom value={progress} colorScheme="blue" />
      </CardFooter>
    </Card>
  )
}

export default QuizCard
