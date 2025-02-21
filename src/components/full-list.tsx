'use client'

import { Gift } from '@/payload-types'
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from '@heroui/table'
import { useAsyncList } from '@react-stately/data'
import { useContext } from 'react'
import { SpinnerContext } from './spinner-context'

interface FullListProps {
  gifts: Array<Gift>
}

interface ListItem {
  number: number
  title: string
  shop: string
  ticket: number
}

export const FullList = ({ gifts }: FullListProps) => {
  const { showSpinner, setShowSpinner } = useContext(SpinnerContext)

  const getValue = (item: ListItem, key: any) => {
    if (key === 'number') {
      return item.number
    }
    if (key === 'title') {
      return item.title
    }
    if (key === 'shop') {
      return item.shop
    }
    if (key === 'ticket') {
      return item.ticket
    }
    return ''
  }

  const list = useAsyncList<ListItem>({
    async load({ signal }) {
      const result = gifts.map((gift) => ({
        number: gift.number as number,
        title: gift.title ?? '',
        shop: gift.shop ?? '',
        ticket:
          gift.ticket && typeof gift.ticket !== 'string' && typeof gift.ticket !== 'undefined'
            ? (gift.ticket.number as number)
            : 0,
      }))
      return {
        items: result,
      }
    },
    async sort({ items, sortDescriptor }) {
      return {
        items: items.sort((a: any, b: any) => {
          const first = a[sortDescriptor.column]
          const second = b[sortDescriptor.column]
          let cmp = (parseInt(first) || first) < (parseInt(second) || second) ? -1 : 1

          if (sortDescriptor.direction === 'descending') {
            cmp *= -1
          }

          return cmp
        }),
      }
    },
  })

  return (
    <div>
      <Table
        aria-label="All presents"
        classNames={{
          table: 'min-h-[400px]',
        }}
        sortDescriptor={list.sortDescriptor}
        onSortChange={list.sort}
      >
        <TableHeader>
          <TableColumn key="number" allowsSorting>
            Number
          </TableColumn>
          <TableColumn key="title" allowsSorting>
            Item
          </TableColumn>
          <TableColumn key="shop" allowsSorting>
            Shop
          </TableColumn>
          <TableColumn key="ticket" allowsSorting>
            Ticket
          </TableColumn>
        </TableHeader>
        <TableBody items={list.items} isLoading={showSpinner}>
          {(item) => (
            <TableRow key={item.number}>
              {(columnKey) => <TableCell>{getValue(item, columnKey)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
