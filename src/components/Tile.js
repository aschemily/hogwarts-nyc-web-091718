import React from 'react'

class Tile extends React.Component{
state = {
	toggle: 'hidden',
}


	handleClick = event => {
		if (this.state.toggle === 'hidden') {
			this.setState({toggle: 'showing'})
		} else if (this.state.toggle === 'showing'){
			this.setState({toggle: 'hidden'})
		}
	}// end of handle click

	render(){
	//	console.log(this.props.greased);

	//	console.log('tile props:',this.props.hogsData[0])
		return (
			<div onClick={this.handleClick} id="name-img" className="card">
				<div className="image">
					<img alt="pig"src={require(`../hog-imgs/${this.props.name.replace(/ /g,"_").toLowerCase()}.jpg`)}/>
				</div>
				<div className="content">
					<div className="header">{this.props.name}</div>
		  	</div>
				<div id={this.state.toggle} className="card">
					<div className="description">
						<span>Weight: {Math.ceil(this.props.weight * 324)}lbs</span>
					</div>
					<div className="description">
						<span>Specialty: {this.props.specialty}</span>
					</div>
					<div className="description">
						<span>Medal: {this.props.medal}</span>
					</div>
					<div className="extra content">
						<span className="right floated">Greased: {this.props.greased.toString()}</span>
					</div>
				</div>
			</div>
		)
	}

}

export default Tile
