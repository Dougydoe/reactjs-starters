import React from "react"
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'
import sampleFishes from '../sample-fishes'
import Fish from './Fish'


class App extends React.Component {
    // set the state to hold the data that will filter down to the 
    // child components. You can use the constuctor method or the property way

    // Initialise state
    state = {
        fishes: {},
        order: {}
    }

    addFish = fish => {
        // updating state...
        // 1. Take a copy of the existing state by using the SPREAD procedure
        const fishes = { ...this.state.fishes }
        // 2. Add our new fish to the fishes variable
        fishes[`fish${Date.now()}`] = fish // where fish is the json object with all entities(name,price,desc etc)

        // 3. Set the new fishes objec to state or update the initialised state
        this.setState (
            {fishes: fishes}
        ) // If your property and value are the same in ES6, you can pass juse one of them
          // this.setState ({ fishes})
    } 

    loadSampleFishes = () => {
        this.setState({ fishes: sampleFishes})
    }
 
    addToOrder = (key) => {
        // 1. Take a copy of state
        const order = { ...this.state.order }
        // 2. Either add to our order or update the number in our order
        order[key] = order[key] + 1 || 1
        // 3. Call set state to update our state object
        // this.setState({ order: order }) or just one order as below as varialbe name
        // and state name is the same
        this.setState({ order })
        }
    

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market" />
                    <ul className="fishes">
                        {// to loop over the fishes, we use regualr Jscript map or for each etc
                            // but we have to convert the Fish object into an array as we can't loop
                            // an object
                            // Also for React to locate the individual fish item quickly for updates,
                            // we need to add an identifier.. like an attribute, in this case, key.
                            Object.keys(this.state.fishes).map(key =>
                                (<Fish
                                    key={key}
                                    index={key} // pass the key again to your own varialbe to get it in react

                                    details={this.state.fishes[key]}
                                    addToOrder={this.addToOrder} />))
                        }
                    </ul>
                </div>
                 <Order fishes={this.state.fish} order={this.state.order} />
                <Inventory addFish={this.addFish}
                           loadSampleFishes={this.loadSampleFishes} /> 
                
            </div>
        )
    }
}

export default App 