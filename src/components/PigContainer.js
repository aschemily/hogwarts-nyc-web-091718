import React from 'react'
import Tile from './Tile'


class PigContainer extends React.Component{

	formatPig = () =>{
		return this.props.hogsData.map((hog, index)=>{
			return <Tile key={index}
				name={hog.name}
				specialty={hog.specialty}
				greased={hog.greased}
				weight={hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}
				medal={hog['highest medal achieved']}
				/>
		})
	}

	render(){
		return (
			<div className="ui link cards">
				{this.formatPig()}
			</div>

		)
	}

}

export default PigContainer
