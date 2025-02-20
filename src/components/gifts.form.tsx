'use client'

import { saveGifts } from '@/actions/save-gifts'
import React from 'react'
import { Button, Form, TextField, Label, Input, TextArea, FileTrigger } from 'react-aria-components'

export const GiftsForm = () => {
  const [file, setFile] = React.useState<Array<string>>([])

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault()
        saveGifts(new FormData(e.currentTarget))
      }}
    >
      <TextField className="py-6">
        <Label className="block pb-2">Gifts as list</Label>
        <TextArea
          className="w-full min-h-72 border border-solid border-gray-200"
          name="giftslist"
        />
      </TextField>
      <div className="py-6">
        <Button className="bg-black text-white px-4 py-2" type="submit">
          Submit
        </Button>
      </div>
    </Form>
  )
}
