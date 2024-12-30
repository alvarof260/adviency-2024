import { Gift } from "../../types";
import { GiftActions } from "../GiftActions/GiftActions";

interface Props {
  gift: Gift;
  deleteGift: (id: number) => void;
}

export const GiftItem = ({ gift, deleteGift }: Props) => {
  return (
    <li className="w-[350px] inline-flex items-center justify-between gap-x-2 py-3 px-4 text-sm font-medium odd:bg-gray-100 bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
      {gift.name}
      <section className="flex flex-row gap-4 items-center">
        <span className="font-bold">x{gift.quantity}</span>
        <GiftActions id={gift.id} deleteGift={deleteGift} />
      </section>
    </li>
  )
}
