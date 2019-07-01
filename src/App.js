import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      cast:[
        {
          id:'100', 
          role:'Actor', 
          name:'Jean-Claude Van Damme',
          placement:'1'
        }, 
        {
          id:'1021',
          role:'Director', 
          name: 'Newt Arnold',
          placement:'2'
        }, 
        {
          id:'4500',
          role:'Actor', 
          name:'Bolo Yeung',
          placement:'3'
        }, 
        {
          id:'188',
          role:'Actor', 
          name:'Donald Gibb',
          placement:'4'
        }, 
        {
          id:'5265',
          role:'Actor', 
          name:'Leah Ayres',
          placement:'5'
        }
      ],
      draggedElementIndex:null
    }
  }

  handleDragOver(e){
    e.preventDefault()
  }
  handleDragStart(e, index){
    e.dataTransfer.setData('index', index)
    this.setState({
      draggedElementIndex:index
    })
  }
  handleDrop(e, index){
    const {cast, draggedElementIndex} = this.state
    let replacedCast = cast[index]
    cast.splice(index, 1, cast[draggedElementIndex])

    cast.splice(draggedElementIndex, 1, replacedCast)
    this.setState({
      cast
    })
  }
  render(){
    const {cast} = this.state
     return (
      <div className="App">
        <h1>Title:Blood Sport!</h1>
        <div className='ulli'>
          {cast.map((c, i) => {
            return(
              <div 
              key={i}
              className='castBox' 
              draggable
              onDragStart={(e) => this.handleDragStart(e, i)}
              onDragOver={(e) => this.handleDragOver(e)}
              onDrop={(e) => this.handleDrop(e, i)}>
                <p>Name: {c.name} - Role: {c.role}</p>
              </div>            
            ) 
          })}
        </div>
      </div>
    );
  }
}

export default App;
