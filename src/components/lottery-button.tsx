'use client'

import React, { useContext } from 'react'
import { SpinnerContext } from './spinner-context'
import { Button } from '@heroui/button'
import { drawNumbers } from '@/actions/draw-numbers'

interface LotteryButtonProps {
  disabled: boolean
}

export const LotteryButton = ({ disabled }: LotteryButtonProps) => {
  const { showSpinner, setShowSpinner } = useContext(SpinnerContext)

  const startLottery = async () => {
    setShowSpinner(true)
    await drawNumbers()
    setShowSpinner(false)
  }

  return (
    <Button
      color="primary"
      size="lg"
      isDisabled={disabled}
      onPress={() => {
        startLottery()
      }}
      isLoading={showSpinner}
    >
      New Lottery
    </Button>
  )
}
