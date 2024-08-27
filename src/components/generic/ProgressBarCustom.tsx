import { Flex, Progress, ProgressProps, Text } from "@chakra-ui/react"

interface ProgressBarCustomProps extends ProgressProps {
  value: number
  label?: string
  colorScheme?: string
  size?: "xs" | "sm" | "md" | "lg"
  hasStripe?: boolean
  isAnimated?: boolean
  width?: string | number
}

const ProgressBarCustom: React.FC<ProgressBarCustomProps> = ({
  value,
  label,
  colorScheme = "blue",
  size = "md",
  hasStripe = false,
  isAnimated = false,
  width = "75%",
}) => {
  return (
    <Flex justify="center" width="100%" mt={1}>
      {label && (
        <Text mb={2} fontSize="md" fontWeight="bold">
          {label}
        </Text>
      )}
      <Progress
        value={value}
        colorScheme={colorScheme}
        size={size}
        hasStripe={hasStripe}
        isAnimated={isAnimated}
        width={width}
      />
    </Flex>
  )
}

export default ProgressBarCustom
