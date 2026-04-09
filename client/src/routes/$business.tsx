import { createFileRoute } from '@tanstack/react-router'

import BookingConsole from '../features/BookingConsole';

import { MOCK_BUSINESS } from '../features/BookingConsole/mocks';

export const Route = createFileRoute('/$business')({
  component: BusinessPage,
})

function BusinessPage() {
  const { business } = Route.useParams();

  const data = MOCK_BUSINESS;

  if(business === 'test') {
    return <div>wtf</div>
  }

  return (
    <>
      <BookingConsole business={data}/>
    </>
  )
}



