'use client'

import { Button } from '@heroui/button'
import { Textarea } from '@heroui/input'
import { Form } from '@heroui/form'

import { saveTickets } from '@/actions/save-tickets'
import { useContext, useState } from 'react'
import { SpinnerContext } from './spinner-context'

export const TicketsForm = () => {
  const { setShowSpinner } = useContext(SpinnerContext)
  const [newTickets, setNewTickets] = useState(0)

  const formAction = async (formData: FormData) => {
    setShowSpinner(true)
    const number = await saveTickets(formData)
    setNewTickets(number.length)
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
        <Textarea name="tickets" className="w-full " label="New Tickets" placeholder="1-5, 7-8" />
        <div className="py-6">
          <Button className="bg-black text-white px-4 py-2" type="submit">
            Submit
          </Button>
        </div>
      </Form>
      {newTickets > 0 && <p>{`${newTickets} new tickets added!`}</p>}
    </>
  )
}
