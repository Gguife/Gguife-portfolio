import GlobalTheme from "./styles/global.ts";
import { MainRouter } from "./router/MainRouter"


//Components
import { Header } from "./components/header/index.tsx";
import { Footer } from "./components/footer/index.tsx";

function App() {


  return (
    <>
      <GlobalTheme />
      <Header />
      <MainRouter />
      <Footer />
    </>
  )
}

export default App
