import { ReactNode } from "react"

interface Props {
  children: ReactNode;
}

export const Hero = ({ children }: Props) => {
  return (
    <main className="h-screen w-screen bg-red-600 flex flex-col justify-center items-center gap-8">
      {children}
    </main>
  )
}
