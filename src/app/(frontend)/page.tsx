import React from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import { LotteryButton } from '@/components/lottery-button'
import { FullList } from '@/components/full-list'
import { headers as nextHeaders } from 'next/headers'

export default async function HomePage() {
  const payload = await getPayload({ config })

  const headers = await nextHeaders()
  const authResult = await payload.auth({ headers })

  const result = await payload.find({
    collection: 'gifts',
    depth: 2,
    page: 1,
    limit: 10000,
    pagination: false,
    sort: 'number',
  })

  const giftsData = await payload.find({
    collection: 'gifts',
    overrideAccess: true,
    depth: 1,
    limit: 10000,
    pagination: false,
    where: {
      drawn: {
        equals: false,
      },
    },
  })

  return (
    <>
      {Array.isArray(result.docs) && result.docs.length > 0 && (
        <main>
          <div className="flex py-12 items-center justify-center">
            <div>
              <p className="text-lg pb-6 text-center">{`${giftsData.docs.length} presents remaining`}</p>
              {authResult.user && (
                <LotteryButton
                  disabled={
                    typeof result.docs[0].ticket !== 'undefined' || giftsData.docs.length === 0
                  }
                />
              )}
            </div>
          </div>
          <div>
            <FullList gifts={result.docs} />
          </div>
        </main>
      )}
    </>
  )
}

export const dynamic = 'force-dynamic'
