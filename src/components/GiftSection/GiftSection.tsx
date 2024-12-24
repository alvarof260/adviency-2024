import { ReactNode } from "react"

interface Props {
  children: ReactNode;
}

export const GiftSection = ({ children }: Props) => {
  return (
    <section className="bg-slate-100 px-2 py-4 rounded-md">
      {children}
    </section>
  )
}
