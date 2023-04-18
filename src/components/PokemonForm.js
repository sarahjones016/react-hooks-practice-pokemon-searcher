import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({onSubmit}) {

  const [name, setName] = useState("")
  const [hp, setHp] = useState("")
  const [front, setFront] = useState("")
  const [back, setBack] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitting form...");

    fetch("http://localhost:3001/pokemon", {
     method: "POST",
     headers: {
      "Content-Type": "Application/JSON"
     },
     body: JSON.stringify({
        name, 
        hp, 
        sprites: {
          front, 
          back,
        }
      }),
    })
    .then((res) => res.json())
    .then((data) => onSubmit(data))
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input onChange={(e) => setName(e.target.value)} value={name} fluid label="Name" placeholder="Name" name="name" />
          <Form.Input onChange={(e) => setHp(e.target.value)} value={hp} fluid label="hp" placeholder="hp" name="hp" />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={front}
            onChange={(e) => setFront(e.target.value)}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={back}
            onChange={(e) => setBack(e.target.value)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
