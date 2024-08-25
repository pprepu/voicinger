import { Scale } from "./types"

export const createBasicScales = (): Scale[] =>
  ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"].map(
    (note) => ({ tonic: note })
  )
