import Nonfictionaldata from '../nonfiction.json'
import BookCard from './BookCard';
export default function NonFiction() {
    return (
        <div>
        <h1>Fictional </h1>
        <div className="books-container"style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
         {Nonfictionaldata.map((el)=><BookCard author={el.author} img={el.img} title={el.title} pricce={el.price} year={el.year}/>)}
        </div>
      </div>
    );
  }
  