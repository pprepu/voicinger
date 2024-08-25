import { Flex } from "@chakra-ui/react"
import QuizCard from "./QuizCard"
import Options from "./Options"
import { useState } from "react"

const Quizzer: React.FC = () => {
  const [isStarted, setIsStarted] = useState(false)
  return (
    <Flex flexDir="column">
      <Options isStarted={isStarted} />
      <QuizCard setIsStarted={setIsStarted} />
    </Flex>
  )
}

export default Quizzer
