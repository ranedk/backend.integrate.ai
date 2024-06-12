import { withShurikenUI } from '@shuriken-ui/tailwind'
import colors from 'tailwindcss/colors'

/**
 * Shuriken UI tailwind configuration
 */
export default withShurikenUI({
  content: [],
  theme: {
    /**
     * Customize fonts
     *
     * You must load them yourself
     * (ex: with unplugin-fonts)
     */
    fontFamily: {
      sans: ['Roboto Flex', 'sans-serif'],
      heading: ['Inter', 'sans-serif'],
      alt: ['Karla', 'sans-serif'],
      mono: ['ui-monospace', 'monospace'],
    },
    extend: {
      /**
       * Customize colors
       *
       * Use tailwind predefined colors,
       * or generate your own with tools like https://tailwindshades.com
       */
      colors: {
        primary: colors.violet,
        'primary-invert': colors.white,
        muted: colors.slate,
        info: colors.sky,
        success: colors.teal,
        warning: colors.amber,
        danger: colors.rose,
      },

      /**
       * Customize Shuriken UI components
       *
       * @see https://github.com/shuriken-ui/tailwind
       */
      nui: {
        // ...
      },
    },
  },
})
