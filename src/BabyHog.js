import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import normalBaby from './assets/unadulterated-hoglette.png'
import SunBaby from './assets/sun-eyes.png'
import BlueBaby from './assets/blue-eyes.png'
import GlowingBaby from './assets/glowing-eyes.png'

// is there a way we could associate eye color string values with images? 
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

export default class BabyHog extends Component {

  constructor(props) {
    super(props)
// debugger
    this.state = {
      weight: 50,
      // image: normalBaby
    }
  }

  // changeImg = () => {
  //   let image = ""
  //   if (this.props.eyeColor === 'blue'){image = BlueBaby} 
  //   else if  (this.props.eyeColor === 'sun'){image = SunBaby}
  //   else if  (this.props.eyeColor === 'glowing'){image = GlowingBaby}
  // }


  changeWeight = (e) => {
    // nothing needs to change here
    const newWeight = e.target.name === "+" ? (this.state.weight + 10) : (this.state.weight - 10)
    this.setState({
      weight: newWeight
    })
  }

  render() {

      let image = normalBaby
      if (this.props.eyeColor === 'blue'){image = BlueBaby} 
      else if  (this.props.eyeColor === 'sun'){image = SunBaby}
      else if  (this.props.eyeColor === 'glowing'){image = GlowingBaby}
    return (
      <li className="hogbabies">
        <h1>Name</h1>
        <h3>Weight:{this.state.weight}</h3>
        <h3>Hobby:</h3>
        <h4>Eye Color:{this.props.eyeColor}</h4>
          
        <Button onClick={(e) => this.changeWeight(e)} name="+">
          Increase Weight
        </Button>
        <Button onClick={(e) => this.changeWeight(e)} name="-">
          Decrease Weight
        </Button>

        <div className="hb-wrap">
          <img src={image} style={{height: '200px'}} alt="MasterBlasterJrJr" />
        </div>
        
      </li>
    )
  }
}
