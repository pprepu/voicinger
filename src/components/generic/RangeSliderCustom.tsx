import React, { useState } from "react"
import {
  Box,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Text,
} from "@chakra-ui/react"

interface RangeSliderCustomProps {
  minValue: number
  maxValue: number
  handleChange: (value: number) => void
  defaultValue: number
}

const RangeSliderCustom: React.FC<RangeSliderCustomProps> = ({
  minValue,
  maxValue,
  handleChange,
  defaultValue,
}) => {
  const [sliderValue, setSliderValue] = useState(defaultValue)

  const onChange = (value: number) => {
    setSliderValue(value)
    handleChange(value)
  }

  return (
    <Box width="100%" padding="4">
      <Text
        mb="4"
        fontSize={{ base: "2xl", md: "4xl" }}
        fontWeight="bold"
        color="mainDark.500"
        textAlign="center"
        textTransform="uppercase"
        letterSpacing="widest"
      >
        {sliderValue}
      </Text>
      <Slider
        aria-label="slider-ex"
        value={sliderValue}
        min={minValue}
        max={maxValue}
        step={0.5}
        onChange={onChange}
        defaultValue={defaultValue}
      >
        <SliderTrack>
          <SliderFilledTrack bg="mainDark.500" />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Box>
  )
}

export default RangeSliderCustom
