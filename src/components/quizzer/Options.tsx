import { Flex } from "@chakra-ui/react"
import RangeSliderCustom from "../generic/RangeSliderCustom"

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
    <Flex mb="1em" w="100%">
      <RangeSliderCustom
        minValue={1}
        maxValue={6}
        defaultValue={defaultTime}
        handleChange={handleChange}
      />
    </Flex>
  )
}

export default Options
