import { Flex } from "@chakra-ui/react"

interface OptionsProps {
  isStarted: boolean
}

const Options: React.FC<OptionsProps> = ({ isStarted }) => {
  if (isStarted) {
    return <></>
  }
  return <Flex mb="1em">Options</Flex>
}

export default Options
