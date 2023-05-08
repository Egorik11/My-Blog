import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Cta } from "./components/CTA"
import { useState, useEffect } from "react"
import { PostList } from './components/PostList'
import {Postitem} from './components/Postitem'
import { Footer } from "./components/Footer"
import unsplashService from './services/unsplashService'

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("feature")

  useEffect(() => {
    async function getData() {
      const result = await unsplashService.searchUnsplashImages(query);
      setData(result);
    }
    getData();
  }, [query]);

  return (
    <div className="Container">
     <Header />
      <Hero />
      <PostList>
        {data.map((el) => (
          <Postitem key={el.id} url={el.links.download} />
        ))}
      </PostList>
      <Cta />
      <Footer />
    </div>
  )
}

export default App
