import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import PigContainer from './PigContainer'
import Search from './Search'


class App extends Component {
  state = {
    hogs: hogs,
    peanutbutter: true,
  }


   filterHogs = (event) =>{
     if(event.target.id === 'grease-button'){
       const filteredHogs = hogs.filter((hog)=>{
         if(this.state.peanutbutter === true){
           return hog.greased
         } else {
         return !hog.greased
         }
        })
          this.setState({peanutbutter:!this.state.peanutbutter})
          this.setState({hogs:filteredHogs})
      } else if (event.target.id === 'name-sort') {
        const sortedHog = this.state.hogs.sort((a,b)=>{
            return a.name < b.name ? -1 : 1
        })
        this.setState({hogs:sortedHog})
    } else if (event.target.id === 'weight-sort') {
      const sortedHog = this.state.hogs.sort((a,b)=>{
        return a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] > b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] ? -1 : 1
    })
    this.setState({hogs:sortedHog})
    }else {
     const filteredHogs = hogs.filter((hog)=>{
       return hog.name.toLowerCase().includes(event.target.value.toLowerCase())
     })
     this.setState({hogs:filteredHogs})
    }
   }


  render() {
    return (
      <div className="App">
        < Nav />
        <Search filterHogs={this.filterHogs}/>
        <PigContainer hogsData={this.state.hogs}/>
      </div>
    )
  }
}

export default App;
