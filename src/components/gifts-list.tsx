import { Gift } from '@/payload-types'
import { ScrollShadow } from '@heroui/scroll-shadow'

interface GiftsListProps {
  gifts: Array<Gift>
}

export const GiftsList = ({ gifts }: GiftsListProps) => {
  return (
    <section>
      <h2 className="font-bold text-lg pb-2">Gifts</h2>
      <ScrollShadow className="w-[300px] h-[400px] border border-solid border-gray-200 p-3">
        {gifts.map((doc) => (
          <p key={doc.id}>{`${doc.number} - ${doc.title} - ${doc.shop}`}</p>
        ))}
      </ScrollShadow>
    </section>
  )
}
