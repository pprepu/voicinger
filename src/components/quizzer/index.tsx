import { Button, Flex, Text } from "@chakra-ui/react"
import QuizCard from "./QuizCard"
import Options from "./Options"
import { useEffect, useState } from "react"
import { createBasicScales } from "../../utils/scales"
import { Scale } from "../../utils/scales/types"
import { shuffleArray } from "../../utils/array"
import logger from "../../utils/logger"
import { calcPercentage } from "../../utils/general"

// initial values
const INITIAL_IS_STARTED = false
const INITIAL_SCALES = shuffleArray(createBasicScales())
const INITIAL_QUIZ_TIME = 3
const INITIAL_INDEX = 0
const INITIAL_INTERVAL_ID = undefined
const INITIAL_ROUNDS_QUIZZED = 0

const Quizzer: React.FC = () => {
  const [isStarted, setIsStarted] = useState(INITIAL_IS_STARTED)
  const [selectedScales, setSelectedScales] = useState<Scale[]>(INITIAL_SCALES)
  const [currentIndex, setCurrentIndex] = useState<number>(INITIAL_INDEX)
  const [currentIntervalId, setCurrentIntervalId] = useState<
    NodeJS.Timeout | undefined
  >(INITIAL_INTERVAL_ID)
  const [roundsQuizzed, setRoundsQuizzed] = useState<number>(
    INITIAL_ROUNDS_QUIZZED
  )
  const [quizTime, setQuizTime] = useState<number>(INITIAL_QUIZ_TIME)

  const resetState = () => {
    setIsStarted(INITIAL_IS_STARTED)
    setSelectedScales(shuffleArray(createBasicScales())) // notice this!
    setCurrentIndex(INITIAL_INDEX)
    clearInterval(currentIntervalId)
    setCurrentIntervalId(INITIAL_INTERVAL_ID)
    setRoundsQuizzed(INITIAL_ROUNDS_QUIZZED)
  }

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
  const currentProgress = calcPercentage(
    currentIndex,
    selectedScales.length - 1
  )

  return (
    <Flex flexDir="column" alignItems="center" mb="2">
      <Options
        isStarted={isStarted}
        setQuizTime={setQuizTime}
        defaultTime={quizTime}
      />
      <QuizCard
        setIsStarted={setIsStarted}
        currentQuiz={currentQuiz}
        animate={isStarted && currentIndex === 0}
        isStarted={isStarted}
        progress={currentProgress}
      />
      <Text
        fontSize={{ base: "2xl", md: "4xl" }}
        fontWeight="bold"
        color="mainDark.500"
        textAlign="center"
        textTransform="uppercase"
        letterSpacing="widest"
      >
        {roundsQuizzed}
      </Text>
      <Button
        mt={4}
        size="lg"
        bg="mainLight.500"
        color="white"
        _hover={{
          transform: "scale(1.1)",
          bg: "mainDark.500",
        }}
        transition="all 0.3s ease-in-out"
        borderRadius="full"
        boxShadow="md"
        fontWeight="bold"
        letterSpacing="wider"
        onClick={resetState}
      >
        Reset
      </Button>
    </Flex>
  )
}

export default Quizzer
