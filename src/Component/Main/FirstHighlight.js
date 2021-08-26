import React, { Component } from 'react';
import CommonFirstSecondThird from './CommonFirstSecondThird';
class FirstHighlight extends Component {
    render() {
        return (
            <div>
                <section className="first-hightlight-wrapper">
                    <CommonFirstSecondThird
                        black="black"
                        titleWrapper="ipad pro"
                        NewWrapper="New"
                    />
                    <div className="ipod-caption row">
				<div className="col-sm-12 col-md-6 text-md-right">iPad Pro available starting 3.25</div>
				<div className="col-sm-12 col-md-6 text-md-left">Magic Keyboard coming in May</div>
			</div>
                </section>
            </div>
        );
    }
}

export default FirstHighlight;
