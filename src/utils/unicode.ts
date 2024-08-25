import logger from "./logger"

const TALLY_MARK_ONE = "\u{1D360}"
const TALLY_MARK_TWO = "\u{1D361}"
const TALLY_MARK_THREE = "\u{1D362}"
const TALLY_MARK_FOUR = "\u{1D363}"
const TALLY_MARK_FIVE = "\u{1D364}"

const numberToIndividualTally = [
  "",
  TALLY_MARK_ONE,
  TALLY_MARK_TWO,
  TALLY_MARK_THREE,
  TALLY_MARK_FOUR,
  TALLY_MARK_FIVE,
]

export const mapNumberToTally = (number: number): string => {
  if (!Number.isInteger(number)) {
    logger.info("called 'mapNumberToTally' with non-integer")
    return ""
  }

  if (number <= 0) {
    return ""
  }

  const fullTalliesAmount = Math.floor(number / 5)
  const remainingTally = numberToIndividualTally[number % 5]

  return TALLY_MARK_FIVE.repeat(fullTalliesAmount) + remainingTally
}
