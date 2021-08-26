import React, { Component } from 'react';

class CommonFirstSecondThird extends Component {
    render() {
        return (
            <div>
            <div className="container">

			<div className="new-alert">
			{ this.props.NewWrapper}
			</div>

			<div className={`title-wraper bold ${this.props.black} ${this.props.white}`}>
				{this.props.titleWrapper}
			</div> 

			<div className={`description-wrapper ${this.props.black} ${this.props.white}`}>
				{this.props.descriptionWrapper}
			</div>

			<div className="price-wrapper grey">
				{this.props.priceWrapper}
			</div>

			<div className="links-wrapper">
				<ul>
					<li><a href="">Learn more</a></li>
					<li><a href="">Buy</a></li>
				</ul> 
			</div>
		</div>
            </div>
        );
    }
}

export default CommonFirstSecondThird;
