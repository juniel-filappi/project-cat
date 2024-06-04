import type { Config } from 'tailwindcss'
import colors from "tailwindcss/colors";

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ['Jost', 'sans-serif'],
      },
      colors: {
        spaceCadet: "#22223bff",
        ultraViolet: "#4a4e69ff",
        roseQuartz: "#9a8c98ff",
        paleDogwood: "#c9ada7ff",
        isabelLine: "#f2e9e4ff",
      }
    }
  }
}