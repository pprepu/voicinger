import { Scale } from "./types"

export const createBasicScales = (): Scale[] =>
  ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"].map(
    mapTonicToScale
  )

export const createChromaticNotesArray = (): string[] => [
  "C",
  "Db",
  "D",
  "Eb",
  "E",
  "F",
  "Gb",
  "G",
  "Ab",
  "A",
  "Bb",
  "B",
]

export const mapTonicToScale = (tonic: string) => ({ tonic })
