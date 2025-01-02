import React, { Component } from 'react'
import loading from './loading.gif';


export class Spinner extends Component {
  render() {
    return (
      <div className='text-center' style={{height : "650px", display : 'flex', alignItems : 'center', justifyContent : 'center'}}>
        <img src={loading} alt="loading" style={{height : 50}}/>
      </div>
    )
  }
}

export default Spinner
