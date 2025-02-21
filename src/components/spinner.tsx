'use client'

import { useContext } from 'react'
import { SpinnerContext } from './spinner-context'
import { Spinner } from '@heroui/spinner'

export const Loader = () => {
  const { showSpinner } = useContext(SpinnerContext)

  return (
    <>
      {showSpinner && (
        <div className="z-50 fixed inset-0 flex items-center justify-center bg-gray-300/40 cursor-wait">
          <Spinner size="lg" color="primary" label="Loading..." />
        </div>
      )}
    </>
  )
}
