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
    this.props.initCharacter(`https://swapi.co/api/people/`)
  }

  nextPageHandler = ()=>{
    this.props.initCharacter(this.props.next)
  }

  previousHandler = ()=>{
    this.props.initCharacter(this.props.previous)
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return <p>Page is Loading...</p>
    } 
    let disableBtnNext; let disableBtnPrev;
    !this.props.previous ? disableBtnPrev=true : disableBtnPrev= false
    !this.props.next ? disableBtnNext=true : disableBtnNext= false
    return (
      <div className="CharactersList_wrapper">
        {!this.props.error ? (
        <div>
          <CharacterList 
          characters={this.props.characters} 
          next={this.props.next}/>
          <button onClick={this.previousHandler} disabled={disableBtnPrev}>Previous</button>
          <button onClick={this.nextPageHandler} disabled={disableBtnNext}>Next</button>
        </div>
        ):
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
    error: state.charsReducer.error,
    next: state.charsReducer.next,
    previous: state.charsReducer.previous
  }
}

export default connect(
 mapStateToProps /* mapStateToProps replaces null here */,
  {
    /* action creators go here */
    initCharacter
  }
)(CharacterListView);
