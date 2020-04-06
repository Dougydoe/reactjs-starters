import React from 'react'
import { formatPrice} from '../helpers'

class Fish extends React.Component {
// Instead of the on liner in the onClick handler in the button, we could also have   
// run the event handler below
    
   /* handleClick = () => {
        this.props.addToOrder(this.props.index)
    }*/

    render() {
        // Using ES6 destructing principles, we can cut short the varialbe
        // in the attributes
        const { image, name, price, desc, status } = this.props.details
        const isAvailable = status === "available"
        return ( // In this case, you leave out "" that should surround the attribute
            <li className="menu-fish">
                 {/*<img src={this.props.details.image} alt={this.props.details.name} /> */}
                <img src={image} alt={name} />
                <h3>
                    {name}
                    <span className="price">{formatPrice(price)}</span>
                </h3>
                <p>{desc}</p>
                <button disabled={!isAvailable} onClick={() => this.props.addToOrder(this.props.index)}>
                    {isAvailable ? "Add To Cart" : "Sold Out!"}
                    </button>
            </li> 
        )
    }
}

export default Fish