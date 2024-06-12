import type { RecaptchaVerifier } from 'firebase/auth'

export {}

declare global {
  interface Window {
    __NUXT__: any
    recaptchaVerifier: RecaptchaVerifier
    grecaptcha: any
  }
}
