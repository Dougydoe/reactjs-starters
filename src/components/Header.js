import React from 'react';

// Convert the below into a STATELESS FUNCTIONAL COMPONENT

// make this an arrow function and an implicit return
// by removing the return and curly brackets
// YOu could also destructure props into individual
// variables by say, {tagline} and remove props
// from the <span> tag in the HTML code

const  Header = (props) => 
     (
        <header className="top">
            <h1>
                Catch
                 <span className="ofThe">
                    <span className="of">Of</span>
                    <span className="the">The</span>
                </span>
                Day
                </h1>
            <h3 className="tagline">
               
                <span>{props.tagline}</span>
            </h3>
        </header >
)

/*
class Header extends React.Component {
    render() {
        return (
            <header className="top">
                <h1>
                Catch
                 <span className="ofThe">
                     <span className="of">Of</span>
                     <span className="the">The</span>   
                 </span>
                Day
                </h1>
                <h3 className="tagline">
                    <span>{this.props.tagline}</span>
                </h3>
            </header >
            
        )
        
    }
} */

export default Header;