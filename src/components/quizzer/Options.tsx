import { Flex } from "@chakra-ui/react"
import CustomRangeSlider from "../generic/CustomRangeSlider"

interface OptionsProps {
  isStarted: boolean
  setQuizTime: React.Dispatch<React.SetStateAction<number>>
  defaultTime: number
}

const Options: React.FC<OptionsProps> = ({
  isStarted,
  setQuizTime,
  defaultTime,
}) => {
  if (isStarted) {
    return <></>
  }

  const handleChange = (time: number) => {
    setQuizTime(time)
  }
  return (
    <Flex mb="1em">
      <CustomRangeSlider
        minValue={2}
        maxValue={10}
        defaultValue={defaultTime}
        handleChange={handleChange}
      />
    </Flex>
  )
}

export default Options
