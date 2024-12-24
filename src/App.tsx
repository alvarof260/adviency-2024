import { GiftList, GiftSection, Hero, Title } from "./components"

function App() {
  return (
    <Hero>
      <Title text="Lista de regalos" />
      <GiftSection>
        <GiftList />
      </GiftSection>
    </Hero>
  )
}

export default App
