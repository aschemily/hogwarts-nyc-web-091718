import React from 'react'

class Search extends React.Component{

  searchName = (event) =>{
    return this.props.filterHogs(event)
  }

  greaseButton = event => {
    return this.props.filterHogs(event)
  }
	render(){
    //console.log(this.props.filterHogs)
		//console.log('Pig Container props:',this.props.hogsData)
		return (
        <div id="search-input" className="ui icon input">
          <button id="grease-button" onClick={this.greaseButton} className="ui violet basic button">Grease Me!</button>
          <button id="name-sort" onClick={this.greaseButton} className="ui olive basic button">Name Sort</button>
          <button id="weight-sort" onClick={this.greaseButton} className="ui orange basic button">Weight Sort</button>
          <input onChange={this.searchName} type="text" placeholder="Search"/>
          <i className="inverted circular search link icon"></i>
        </div>
		)
	}
}

export default Search
