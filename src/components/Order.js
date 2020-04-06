import React from 'react';
import { formatPrice } from '../helpers';

class Order extends React.Component {
            
    render() {
        // Get the order IDs by getting the keys
        const orderIds = Object.keys(this.props.order);

        // Get the totals amounts by using the reduce() array method which sums up amongst other things
        const total = orderIds.reduce((prevTotal, key) => {
            const fish = this.props.fishes[key];
            const count = this.props.order[key];
            const isAvailable = fish && fish.status === 'available';
            if (isAvailable) {
                return prevTotal + (count * fish.price);
            }
            return prevTotal;
        }, 0);

        return (
            <div className="order-wrap">
                <h2>Order</h2>
                {orderIds}
                <div className="total">
                    Total:
                    <strong>{formatPrice(total)}</strong>
                </div>
                
            </div>
            
        )
        
    }
}

export default Order;