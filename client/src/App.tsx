import BookingConsole from "./features/BookingConsole"
import { MOCK_BUSINESS } from "./features/BookingConsole/mocks"

import './index.scss';

function App() {
  return (
    <div>
      <BookingConsole business={MOCK_BUSINESS}/>
    </div>
  )
}

export default App
