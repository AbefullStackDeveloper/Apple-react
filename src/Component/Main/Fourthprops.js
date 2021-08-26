import React, { Component } from 'react';

class Fourthprops extends Component {
    render() {
        return (
                <div className={`${this.props.sideWrapper} col-sm-12 col-md-6`} >
                <div className={this.props.container}>
						<div className={`title-wraper ${this.props.white}`}>
						{this.props.titleWrapper}
						</div> 
						<div className="description-wraper">
						{this.props.description}
						</div>
                    <div className="price-wrapper">
                        {this.props.price}
						<sup>1</sup>
						</div>
                        <div className={`links-wrapper ${this.props.white}`}>
                        <ul>l,
                        <li><a href="">Learn more</a></li>
                        
                        <li><a href="">{this.props.linkWrapper }</a></li>
						</ul> 
						</div>
                    </div>
                    </div>
            
        );
    }
}

export default Fourthprops;
