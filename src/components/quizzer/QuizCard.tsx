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
    <Card align="center" onClick={handleClick}>
      <CardBody fontSize={150}> {currentQuiz}</CardBody>
    </Card>
  )
}

export default QuizCard
