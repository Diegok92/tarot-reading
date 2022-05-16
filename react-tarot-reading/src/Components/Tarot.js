export default function Tarot(props) {
  // const info = fetch("https://rws-cards-api.herokuapp.com/api/v1/cards/random")
  //   .then((res) => res.json())
  //   .then((cards) => {
  //     console.log(cards);

  //   });

  return (
    <div>
      <p>{props.data}</p>
    </div>
  );
}
