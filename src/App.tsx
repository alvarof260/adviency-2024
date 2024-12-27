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

  const deleteAllGift = () => {
    setGifts([])
  }

  return (
    <Hero>
      <GiftForm addGift={addGift} />
      <GiftList>
        {gifts.map((gift) => (
          <GiftItem gift={gift} key={gift.id} deleteGift={deleteGift} />
        ))}
      </GiftList >

      <button
        className="group relative inline-block text-sm font-medium text-black focus:outline-none focus:ring"
        onClick={deleteAllGift}
      >
        <span className="absolute inset-0 border border-slate-200 group-active:border-slate-200"></span>
        <span
          className="block border border-slate-200 bg-slate-200 px-12 py-3 transition-transform active:border-red-100 active:bg-slate-100 group-hover:-translate-x-1 group-hover:-translate-y-1"
        >
          Borrar Todo
        </span>
      </button>

    </Hero>
  )
}

export default App
