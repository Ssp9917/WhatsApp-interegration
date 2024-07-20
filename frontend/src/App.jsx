import { useState } from 'react'

import WhatsAppSender from './component/WhatsAppSender'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WhatsAppSender/>
    </>
  )
}

export default App
