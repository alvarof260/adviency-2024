import { useState } from "react"
import { GiftForm, GiftList, GiftItem, Hero } from "./components"
import { Gift } from "./types"

function App() {
  const [gifts, setGifts] = useState<Gift[]>([]);

  const addGift = (name: string) => {
    const gift = { name, id: gifts.length === 0 ? 1 : gifts[gifts.length - 1].id + 1 }
    const newState = [...gifts, gift]
    setGifts(newState)
  }

  const deleteGift = (id: number) => {
    const newState = gifts.filter((gift) => gift.id != id);
    setGifts(newState);
  }

  return (
    <Hero>
      <GiftForm addGift={addGift} />
      <GiftList>
        {gifts.map((gift) => (
          <GiftItem gift={gift} key={gift.id} deleteGift={deleteGift} />
        ))}
      </GiftList >
    </Hero>
  )
}

export default App
