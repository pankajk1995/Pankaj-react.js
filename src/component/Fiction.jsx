
import Fictionaldata from '../fiction.json';
import BookCard from './BookCard';

export default function Fiction() {
    console.log(Fictionaldata);
  return (
    <div>
      <h1>Non Fictional </h1>
      <div className="books-container"style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
       {Fictionaldata.map((el)=><BookCard author={el.author} img={el.img} title={el.title} pricce={el.price} year={el.year}/>)}
      </div>
    </div>
  );
}
