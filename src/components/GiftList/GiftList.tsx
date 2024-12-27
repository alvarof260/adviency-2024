import { ReactNode } from "react"

interface Props {
  children: ReactNode;
}

export const GiftList = ({ children }: Props) => {
  return (
    <ul className="flex flex-col max-h-80 overflow-hidden overflow-y-scroll">
      {children}
    </ul>
  )
}
