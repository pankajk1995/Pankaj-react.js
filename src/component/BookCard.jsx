
export default function BookCard({img,price,year,author,title}) {
    return (
      <div data-testid="book-card" className="book">
        <img src={img} alt={"title"} height={300} width={400} />
        <b>
          <div data-testid="book-card-title">
            {title}
            <span>{year}</span>
          </div>
        </b>
        <div data-testid="book-card-author">{author}</div>
        <div data-testid="book-card-price">{price}</div>
      </div>
    );
  }