import React from "react"

class LelloImg extends React.Component {
  render() {
    console.log(LelloImg.props)
    return <img style={{boxShadow:"2px 2px 25px 1px white", border:"2px solid #454c5a"}} src={this.props.img} alt={this.props.alt} />
    
  }
}

export default LelloImg
