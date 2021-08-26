import React, { Component } from 'react'

export default class Fifth extends Component {
    render() {
        return (
            
                <div className={`${this.props.sideWrapper} col-sm-12 col-md-6`}>
					<div className={this.props.container}>
						<div className="top-logo-wrapper">
							<div className="logo-wrapper">
								<img src={this.props.imgName}/>
							</div>
						</div>
						<div className={`description-wraper${this.props.white}`}>
							{this.props.description}
						</div>
						<div className="links-wrapper">
							<ul>
                                <li><a href="">{this.props.linkName }</a></li>
                                <li><a href="">{this.props.linkName2}<sup>{ this.props.super}</sup></a></li>
							</ul> 
						</div>
					</div>
				</div>					
			
		
            
        )
    }
}
