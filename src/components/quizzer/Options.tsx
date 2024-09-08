import { Box } from "@chakra-ui/react"
import RangeSliderCustom from "../generic/RangeSliderCustom"
import AdditionalOptions from "./AdditionalOptions"
import { Scale } from "../../utils/scales/types"

interface OptionsProps {
  isStarted: boolean
  setQuizTime: React.Dispatch<React.SetStateAction<number>>
  defaultTime: number
  selectedScales: Scale[]
  setSelectedScales: React.Dispatch<React.SetStateAction<Scale[]>>
}

const Options: React.FC<OptionsProps> = ({
  isStarted,
  setQuizTime,
  defaultTime,
  selectedScales,
  setSelectedScales,
}) => {
  if (isStarted) {
    return <></>
  }

  const handleChange = (time: number) => {
    setQuizTime(time)
  }
  return (
    <Box mb="1em" w="100%">
      <RangeSliderCustom
        minValue={1}
        maxValue={6}
        defaultValue={defaultTime}
        handleChange={handleChange}
      />
      <AdditionalOptions
        selectedScales={selectedScales}
        setSelectedScales={setSelectedScales}
      />
    </Box>
  )
}

export default Options
