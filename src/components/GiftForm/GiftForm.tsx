import { FormEvent, useState } from "react"

interface Props {
  addGift: (name: string) => void
}

export const GiftForm = ({ addGift }: Props) => {
  const [name, setName] = useState("");

  const handleName = (e: FormEvent) => {
    e.preventDefault();
    if (name !== "") {
      addGift(name);
      setName("");
    }
  }

  return (
    <form className="w-[350px]" onSubmit={handleName}>
      <div className="relative">
        <label htmlFor="GiftName" className="sr-only"> Gift</label>

        <input
          type="text"
          id="GiftName"
          placeholder="Agregue un regalo..."
          className="w-full rounded-md border-gray-200 pe-10 shadow-sm sm:text-sm outline-0"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <span
          className="pointer-events-none absolute inset-y-0 end-0 grid w-10 place-content-center text-gray-500"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
          </svg>
        </span>
      </div>
    </form>
  )
}
