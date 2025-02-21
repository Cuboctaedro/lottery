'use client'

import { useState } from 'react'
import { SpinnerContext } from './spinner-context'

interface SpinnerContextProviderProps {
  children: React.ReactNode
}

export const SpinnerContextProvider = ({ children }: SpinnerContextProviderProps) => {
  const [showSpinner, setShowSpinner] = useState(false)
  return (
    <SpinnerContext.Provider
      value={{
        showSpinner,
        setShowSpinner,
      }}
    >
      {children}
    </SpinnerContext.Provider>
  )
}
