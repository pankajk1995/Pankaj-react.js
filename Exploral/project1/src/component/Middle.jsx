import Card from "react-bootstrap/Card";
export default function Middle() {
  return (
    <div className="grid">
      <div>
        <Card
          style={{
            width: "58rem",
            height: "30rem",
            marginTop: "3rem",
            borderRadius: "2rem",
          }}
        >
          <Card.Img
            variant="top"
            src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?cs=srgb&dl=pexels-pixabay-356056.jpg&fm=jpg"
          style={{borderRadius: "2rem",}}/>
        </Card>
      </div>
      <div
        style={{
          width: "50%",
          marginLeft: "50%",
          marginTop: "-15%",
          textAlign: "center",
        }}
      >
        <p>
          <b>Technology</b> affects people all over the world. Advances in
          technology have made our countries safer and our lives easier, they
          have also negatively affected our lives. Technology have brought us
          online banking, smart cars, smart TVs, lightning fast computers, and
          the virtual reality<br></br>From the earliest stone tools to the
          latest advances in artificial intelligence, robotics, blockchains and
          virtual reality, technology has continuously transformed our lives.
          Stay informed about the latest technological breakthroughs and the
          ethical and societal norms they challenge.
        </p>
      </div>
    </div>
  );
}