import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import {initCharacter} from '../actions/index'

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.initCharacter()
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return <p>Page is Loading...</p>
    } 
    return (
      <div className="CharactersList_wrapper">
        {!this.props.error ? <CharacterList 
        characters={this.props.characters} />:
          <p>{this.props.error}</p>
      }
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state =>{
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.loading,
    error: state.charsReducer.error
  }
}

export default connect(
 mapStateToProps /* mapStateToProps replaces null here */,
  {
    /* action creators go here */
    initCharacter
  }
)(CharacterListView);
