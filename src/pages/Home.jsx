import { Hero } from "../components/Hero"
import { Cta } from "../components/CTA"
import { useState, useEffect } from "react"
import { PostList } from '../components/PostList'
import {Postitem} from '../components/Postitem'
import unsplashService from '../services/unsplashService'


export const Home = () => {
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
    <div>
      <Hero />
      <PostList>
        {data.map((el) => (
          <Postitem key={el.id} url={el.urls.small} />
        ))}
      </PostList>
      <Cta />
    </div>
  )
}