import { useState } from "react"
import { Checkbox, CheckboxGroup, Box, SimpleGrid } from "@chakra-ui/react"
import { createBasicScales, createChromaticNotesArray, mapTonicToScale } from "../../utils/scales"
import { Scale } from "../../utils/scales/types"

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
      setSelectedScales(createBasicScales())
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
    setSelectedScales(newSelectedScales)

    if (newSelectedScales.length === allTonicOptions.length) {
      setIsSelectAllTonicsChecked(true)
    } else {
      setIsSelectAllTonicsChecked(false)
    }
  }

  return (
    <Box p={4} maxW="400px" margin="auto" onClick={hideAdditionalOptions}>
      <Box mb={4}>
        <Checkbox isChecked={isSelectAllTonicsChecked} onChange={handleSelectAllTonics}>
          Select All
        </Checkbox>
      </Box>

      <CheckboxGroup value={selectedScales.map((scale) => scale.tonic)}>
        <SimpleGrid columns={4} spacing={4}>
          {allTonicOptions.map((note) => (
            <Checkbox
              key={note}
              value={note}
              isChecked={selectedTonicNotes.has(note)}
              onChange={() => handleCheckboxChange(note)}
            >
              {note}
            </Checkbox>
          ))}
        </SimpleGrid>
      </CheckboxGroup>
    </Box>
  )
}

export default AdditionalOptions
