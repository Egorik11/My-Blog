import "./assets/style.css"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"

function App() {
  return (
    <div className="Container">
     <Header />
      <Hero />
      <button>
        click
      </button>
      <div className="postlist">
        <div className="postitem">1 item</div>
        <div className="postitem">2 item</div>
        <div className="postitem">3 item</div>
      </div>
      <div className="cta"></div>
      <div className="footer"></div>
    </div>
  )
}

export default App
