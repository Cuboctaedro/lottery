'use client'

import { Button, Form, TextField, Label, TextArea } from 'react-aria-components'
import { saveTickets } from '@/actions/save-tickets'

export const TicketsForm = () => {
  return (
    <Form onSubmit={(e) => saveTickets(new FormData(e.currentTarget))}>
      <TextField className="py-6">
        <Label className="block pb-2">Tickets</Label>
        <TextArea className="w-full min-h-72 border border-solid border-gray-200" name="tickets" />
      </TextField>
      <div className="py-6">
        <Button className="bg-black text-white px-4 py-2" type="submit">
          Submit
        </Button>
      </div>
    </Form>
  )
}
