import { Postitem } from "../Postitem"

function Postlist({dataImg}) {
  return (
    <div className="postlist">
     {dataImg.map((element) => (
      <Postitem key={element.id} url={element.links.download} />
      ))}
    </div>
  )
}

export {Postlist}
