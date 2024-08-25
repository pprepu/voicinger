import { Flex } from "@chakra-ui/react"
import QuizCard from "./QuizCard"
import Options from "./Options"
import { useEffect, useState } from "react"
import { createBasicScales } from "../../utils/scales"
import { Scale } from "../../utils/scales/types"
import { shuffleArray } from "../../utils/array"
import logger from "../../utils/logger"

const initialScales = shuffleArray(createBasicScales())
const DEFAULT_TIME = 4

const Quizzer: React.FC = () => {
  const [isStarted, setIsStarted] = useState(false)
  const [selectedScales, setSelectedScales] = useState<Scale[]>(initialScales)
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [currentIntervalId, setCurrentIntervalId] = useState<
    NodeJS.Timeout | undefined
  >(undefined)
  const [roundsQuizzed, setRoundsQuizzed] = useState<number>(0)
  const [quizTime, setQuizTime] = useState<number>(DEFAULT_TIME)

  const showNextQuizCard = () => {
    setCurrentIndex((ci) => {
      if (ci >= selectedScales.length - 1) {
        setRoundsQuizzed((rq) => rq + 1)
        setSelectedScales(shuffleArray(selectedScales))
        return 0
      }
      return ci + 1
    })
  }

  useEffect(() => {
    if (!isStarted) {
      clearInterval(currentIntervalId)
      setCurrentIntervalId(undefined)
    } else {
      const intervalId = setInterval(() => {
        showNextQuizCard()
      }, quizTime * 1000)
      setCurrentIntervalId(intervalId)
    }
    return () => {
      clearInterval(currentIntervalId)
      setCurrentIntervalId(undefined)
    }
    // eslint-disable-next-line
  }, [isStarted])
  logger.info(currentIndex, currentIntervalId)
  logger.info(selectedScales.map((scale) => scale.tonic).join("-"))
  const currentQuiz = selectedScales[currentIndex]?.tonic ?? ""

  return (
    <Flex flexDir="column">
      <Options
        isStarted={isStarted}
        setQuizTime={setQuizTime}
        defaultTime={quizTime}
      />
      <QuizCard setIsStarted={setIsStarted} currentQuiz={currentQuiz} />
      {roundsQuizzed}
    </Flex>
  )
}

export default Quizzer
