import React from 'react'
import { getFunName } from '../helpers'

// Using a constuctor to bind the event to goToStore
class StorePicker extends React.Component {

  /* constructor() {
       super()
       this.goToStore = this.goToStore.bind(this) */



  // create a Reference fo the input data
  myInput = React.createRef()

  // Instead of using the constructor to bind the event
  // use a prop (with event object) and arrow function
  goToStore = (event) => {
    // 1. Stop the form from submitting
    event.preventDefault()

    // 2. Get the text from the input
    const storeName = this.myInput.current.value
    
    // 3. Route the navigation via push and history
    this.props.history.push(`/store/${storeName}`)

  }
  /*
   componentDidMount() {
       console.log('MOUNTED!!!!')
       console.log(this)
   } */

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()} />
        <button type="submit">Visit Store -></button>
      </form>

    )
  }
}

export default StorePicker
