import { useState } from "react"
import { GiftForm, GiftList, Hero, Title } from "./components"
import { Gift } from "./types"

function App() {
  const [gifts, setGifts] = useState<Gift[]>([]);

  const addGift = (name: string) => {
    const gift = { name, id: gifts.length === 0 ? 1 : gifts[gifts.length - 1].id + 1 }
    const newState = [...gifts, gift]
    setGifts(newState)
  }

  return (
    <Hero>
      <Title text="Lista de regalos" />
      <GiftForm addGift={addGift} />
      <GiftList gifts={gifts} />
    </Hero>
  )
}

export default App
