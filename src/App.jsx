import "./assets/style.css"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Button } from "./components/Button"
import { Cta } from "./components/Cta"
import { getRequest } from "./api"
import { useState } from "react"
import { useEffect } from "react"
import { Postlist } from './components/Postlist'
import { Footer } from "./components/Footer"

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    async function getData(){
      const result = await getRequest()
      setData(result)
    }
    getData();
  }, [])

  return (
    <div className="Container">
     <Header />
      <Hero />
      <Postlist dataImg={data} />
      <Cta></Cta>
      <Footer />
    </div>
  )
}

export default App
