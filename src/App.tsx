import { useState } from "react"
import { GiftForm, GiftList, GiftItem, Hero, NoGift, DeleteAllBtn } from "./components"
import { Gift } from "./types"

function App() {
  const [gifts, setGifts] = useState<Gift[]>(() => {
    const giftsWithLocalStorage = window.localStorage.getItem("gifts");
    return giftsWithLocalStorage
      ? JSON.parse(giftsWithLocalStorage)
      : []
  });

  const addGift = (name: string, quantity: number) => {
    const gift = { id: gifts.length === 0 ? 1 : gifts[gifts.length - 1].id + 1, name, quantity };
    if (!gifts.find(g => g.name === gift.name)) {
      const newState = [...gifts, gift];
      setGifts(newState);
      window.localStorage.setItem("gifts", JSON.stringify(newState));
    }
  }

  const deleteGift = (id: number) => {
    const newState = gifts.filter((gift) => gift.id != id);
    setGifts(newState);
    window.localStorage.setItem("gifts", JSON.stringify(newState));
  }

  const deleteAllGift = () => {
    setGifts([]);
    window.localStorage.removeItem("gifts");
  }

  return (
    <Hero>
      <GiftForm addGift={addGift} />
      {
        gifts.length === 0
          ? (<NoGift />)
          : (<GiftList>
            {gifts.map((gift) => (
              <GiftItem gift={gift} key={gift.id} deleteGift={deleteGift} />
            ))}
          </GiftList >)
      }
      <DeleteAllBtn deleteAllGift={deleteAllGift} />
    </Hero>
  )
}

export default App
