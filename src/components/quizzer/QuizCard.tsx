import { Card, CardBody } from "@chakra-ui/react"

interface QuizCardProps {
  setIsStarted: React.Dispatch<React.SetStateAction<boolean>>
}

const QuizCard: React.FC<QuizCardProps> = ({ setIsStarted }) => {
  const handleClick = () => {
    setIsStarted((is) => !is)
  }

  return (
    <Card align="center" onClick={handleClick}>
      <CardBody> quizcard </CardBody>
    </Card>
  )
}

export default QuizCard
