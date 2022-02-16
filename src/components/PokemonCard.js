import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {
  const [image, setImage] = useState(true)
  const { name, hp, sprites } = pokemon

  function handleClick() {
    setImage((image) => !image)
  }
  return (
    <Card onClick={handleClick}>
      <div>
        <div className="image">
          <img src={image ? sprites.front: sprites.back} alt={name} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
