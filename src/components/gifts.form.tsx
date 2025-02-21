'use client'

import { saveGifts } from '@/actions/save-gifts'
import React, { useContext, useState } from 'react'
import { Button } from '@heroui/button'
import { Textarea } from '@heroui/input'
import { Form } from '@heroui/form'
import { SpinnerContext } from './spinner-context'

export const GiftsForm = () => {
  const { setShowSpinner } = useContext(SpinnerContext)
  const [newGifts, setNewGifts] = useState(0)

  const formAction = async (formData: FormData) => {
    setShowSpinner(true)
    const number = await saveGifts(formData)
    setNewGifts(number.length)
    setShowSpinner(false)
  }

  return (
    <>
      <Form
        onSubmit={(e) => {
          e.preventDefault()
          formAction(new FormData(e.currentTarget))
        }}
      >
        <Textarea
          name="giftslist"
          className="w-full"
          label="Gifts"
          placeholder="number, present, shop"
        />
        <div className="py-6">
          <Button className="bg-black text-white px-4 py-2" type="submit">
            Submit
          </Button>
        </div>
      </Form>
      {newGifts > 0 && <p>{`${newGifts} new gifts added!`}</p>}
    </>
  )
}
