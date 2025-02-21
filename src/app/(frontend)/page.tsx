import React from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import { LotteryButton } from '@/components/lottery-button'
import { FullList } from '@/components/full-list'

export default async function HomePage() {
  const payload = await getPayload({ config })

  const result = await payload.find({
    collection: 'gifts',
    depth: 1,
    page: 1,
    limit: 10000,
    pagination: false,
    sort: 'number',
  })

  // console.log(typeof result.docs[0].ticket === 'undefined')

  return (
    <>
      {Array.isArray(result.docs) && result.docs.length > 0 && (
        <main>
          <div className="flex py-12 items-center justify-center">
            <LotteryButton disabled={typeof result.docs[0].ticket !== 'undefined'} />
          </div>
          <div>
            <FullList gifts={result.docs} />
          </div>
        </main>
      )}
    </>
  )
}
