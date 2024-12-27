interface Props {
  name: string;
}

export const GiftItem = ({ name }: Props) => {
  return (
    <li className="w-[350px] inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium odd:bg-gray-100 bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">{name}</li>
  )
}
