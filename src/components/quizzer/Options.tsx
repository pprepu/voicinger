import { Box, Button } from "@chakra-ui/react"
import RangeSliderCustom from "../generic/RangeSliderCustom"
import AdditionalOptions from "./AdditionalOptions"
import { Scale } from "../../utils/scales/types"
import { useState } from "react"

interface OptionsProps {
  isStarted: boolean
  setQuizTime: React.Dispatch<React.SetStateAction<number>>
  defaultTime: number
  selectedScales: Scale[]
  setSelectedScales: React.Dispatch<React.SetStateAction<Scale[]>>
}

const DEFAULT_SHOW_ADDITIONAL_OPTIONS = false

const Options: React.FC<OptionsProps> = ({
  isStarted,
  setQuizTime,
  defaultTime,
  selectedScales,
  setSelectedScales,
}) => {
  const [showAdditionalOptions, setShowAdditionalOptions] = useState(
    DEFAULT_SHOW_ADDITIONAL_OPTIONS
  )

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
      {showAdditionalOptions ? (
        <AdditionalOptions
          selectedScales={selectedScales}
          setSelectedScales={setSelectedScales}
          hideAdditionalOptions={() => setShowAdditionalOptions(false)}
        />
      ) : (
        <Button
          mt={0}
          size="sm"
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
          onClick={() => setShowAdditionalOptions(true)}
        >
          More options
        </Button>
      )}
    </Box>
  )
}

export default Options
