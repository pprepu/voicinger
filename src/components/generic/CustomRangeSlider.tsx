import React from "react"
import {
  Box,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Text,
} from "@chakra-ui/react"

interface CustomRangeSliderProps {
  minValue: number
  maxValue: number
  handleChange: (value: number) => void
  defaultValue: number
}

const CustomRangeSlider: React.FC<CustomRangeSliderProps> = ({
  minValue,
  maxValue,
  handleChange,
  defaultValue,
}) => {
  const [sliderValue, setSliderValue] = React.useState(defaultValue)

  const onChange = (value: number) => {
    setSliderValue(value)
    handleChange(value)
  }

  return (
    <Box width="100%" padding="4">
      <Text mb="4">{sliderValue}</Text>
      <Slider
        aria-label="slider-ex"
        value={sliderValue}
        min={minValue}
        max={maxValue}
        onChange={onChange}
        defaultValue={defaultValue}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Box>
  )
}

export default CustomRangeSlider
