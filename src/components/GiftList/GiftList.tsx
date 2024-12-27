import { Gift } from "../../types"
import { GiftItem } from "../index.ts"

interface Props {
  gifts: Gift[]
}

export const GiftList = ({ gifts }: Props) => {
  return (
    <ul className="flex flex-col max-h-80 overflow-hidden overflow-y-scroll">
      {gifts.map((gift) => (
        <GiftItem name={gift.name} key={gift.id} />
      ))}
    </ul>
  )
}
