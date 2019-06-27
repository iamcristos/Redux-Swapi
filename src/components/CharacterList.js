import React from "react";

import Character from "./Character";

const CharacterList = props => {
  return (
    <ul>
      {props.characters.map(character => {
        return <Character key={character.name} character={character} next={props.next}/>;
      })}
    </ul>
  );
};

export default CharacterList;
