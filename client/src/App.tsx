import BookingConsole from "./features/BookingConsole";
import LandingPage from "./features/LandingPage";
import { MOCK_BUSINESS } from "./features/BookingConsole/mocks"

import './index.scss';

function App() {
  return (
    <div>
      {/* <LandingPage /> */}
      <BookingConsole business={MOCK_BUSINESS}/>
    </div>
  )
}

export default App
