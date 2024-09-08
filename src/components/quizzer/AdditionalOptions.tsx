import { useState } from "react"
import { Checkbox, CheckboxGroup, SimpleGrid, Button, Flex } from "@chakra-ui/react"
import { createBasicScales, createChromaticNotesArray, mapTonicToScale } from "../../utils/scales"
import { Scale } from "../../utils/scales/types"
import { shuffleArray } from "../../utils/array"

interface AdditionalOptionsProps {
  selectedScales: Scale[]
  setSelectedScales: React.Dispatch<React.SetStateAction<Scale[]>>
  hideAdditionalOptions: () => void
}

const AdditionalOptions: React.FC<AdditionalOptionsProps> = ({
  selectedScales,
  setSelectedScales,
  hideAdditionalOptions,
}) => {
  const allTonicOptions = createChromaticNotesArray()
  const [isSelectAllTonicsChecked, setIsSelectAllTonicsChecked] = useState(
    selectedScales.length === allTonicOptions.length
  )

  const selectedTonicNotes = new Set(selectedScales.map((scale) => scale.tonic))

  const handleSelectAllTonics = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedScales(shuffleArray(createBasicScales()))
      setIsSelectAllTonicsChecked(true)
    } else {
      setSelectedScales([])
      setIsSelectAllTonicsChecked(false)
    }
  }

  const handleCheckboxChange = (value: string) => {
    const newSelectedScales = selectedTonicNotes.has(value)
      ? selectedScales.filter((scale) => scale.tonic !== value)
      : [...selectedScales, mapTonicToScale(value)]
    setSelectedScales(shuffleArray(newSelectedScales))

    if (newSelectedScales.length === allTonicOptions.length) {
      setIsSelectAllTonicsChecked(true)
    } else {
      setIsSelectAllTonicsChecked(false)
    }
  }

  return (
    <Flex p={4} maxW="400px" flexDir="column" margin="auto" justify="center">
      <Flex mb={4}>
        <Checkbox
          isChecked={isSelectAllTonicsChecked}
          onChange={handleSelectAllTonics}
          colorScheme="mainDark"
          sx={{
            "& .chakra-checkbox__control": {
              borderRadius: "6px",
            },
            "& .chakra-checkbox__label": {
              fontSize: "sm",
              color: "mainDark.500",
            },
          }}
        >
          Select All
        </Checkbox>
      </Flex>

      <CheckboxGroup value={selectedScales.map((scale) => scale.tonic)}>
        <SimpleGrid columns={4} spacing={4}>
          {allTonicOptions.map((note) => (
            <Checkbox
              key={note}
              value={note}
              isChecked={selectedTonicNotes.has(note)}
              onChange={() => handleCheckboxChange(note)}
              colorScheme="mainLight"
              sx={{
                "& .chakra-checkbox__control": {
                  borderRadius: "6px",
                },
                "& .chakra-checkbox__label": {
                  fontSize: "sm",
                  color: "mainDark.500",
                },
              }}
            >
              {note}
            </Checkbox>
          ))}
        </SimpleGrid>
      </CheckboxGroup>

      <Button
        mt={4}
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
        onClick={hideAdditionalOptions}
      >
        Hide options
      </Button>
    </Flex>
  )
}

export default AdditionalOptions
