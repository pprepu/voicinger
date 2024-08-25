export const info = (...args: unknown[]) => {
  if (process.env.NODE_ENV === "development") {
    console.log(...args)
  }
}

export default {
  info,
}
