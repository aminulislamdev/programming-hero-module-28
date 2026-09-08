import ButtonEventPatterns from "./ButtonEventPatterns"
import ClickCounterMessage from "./ClickCounterMessage"
import ClickMessage from "./ClickMessage"
import Counter from "./Counter"
import NameChanger from "./NameChanger"
import Paragraph from "./Paragraph"

function App() {

  return (
    <>
      <Counter></Counter>
      <NameChanger></NameChanger>
      <Paragraph></Paragraph>
      <ButtonEventPatterns></ButtonEventPatterns>
      <ClickMessage></ClickMessage>
      <ClickCounterMessage></ClickCounterMessage>
    </>
  )
}

export default App
