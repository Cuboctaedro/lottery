'use client'

import { createContext } from 'react'

export const SpinnerContext = createContext<{
  showSpinner: boolean
  setShowSpinner: (v: boolean) => void
}>({
  showSpinner: false,
  setShowSpinner: () => null,
})
