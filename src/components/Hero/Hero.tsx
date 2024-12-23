import { ReactNode } from "react"

interface Props {
  children: ReactNode;
}

export const Hero = ({ children }: Props) => {
  return (
    <main className="h-screen bg-hero-pattern flex flex-col justify-center items-center">
      {children}
    </main>
  )
}
