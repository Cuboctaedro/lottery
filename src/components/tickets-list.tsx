import { Ticket } from '@/payload-types'
import { ScrollShadow } from '@heroui/scroll-shadow'

interface TicketsListProps {
  tickets: Array<Ticket>
}

export const TicketsList = ({ tickets }: TicketsListProps) => {
  return (
    <section>
      <h2 className="font-bold text-lg pb-2">Sold tickets</h2>
      <ScrollShadow className="w-[200px] h-[400px] border border-solid border-gray-200 p-3">
        {tickets.map((doc) => (
          <p key={doc.id}>{doc.number}</p>
        ))}
      </ScrollShadow>
    </section>
  )
}
