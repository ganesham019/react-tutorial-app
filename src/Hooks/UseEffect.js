import React from "react";

function UseEffect() {
  const [joke, setJoke] = React.useState([]);
  const [update, setUpdate] = React.useState();

  React.useEffect(() => {
    async function JokeFree() {
      let response = await fetch("https://api.chucknorris.io/jokes/random");
      let data = await response.json();
      setJoke(data);
    }
    JokeFree();
  }, [update]);

  return (
    <div>
      {joke && (
        <div key={joke.id}>
          <img src={joke.icon_url} class="img-fluid " alt="" />
          <h1>{joke.value}</h1>
        </div>
      )}

      <button
        className="btn btn-primary"
        onClick={() => setUpdate((prevstate) => !prevstate)}
      >
        show me new Joke
      </button>
    </div>
  );
}

export default UseEffect;
