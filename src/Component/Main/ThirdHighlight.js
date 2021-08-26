import React, { Component } from 'react';
import CommonFirstSecondThird from './CommonFirstSecondThird';

class ThirdHighlight extends Component {
    render() {
        return (
            <div>
                <section className="third-hightlight-wrapper">
                    <CommonFirstSecondThird
                        white="white"
                        titleWrapper="iPhone 11 Pro "
                        descriptionWrapper=
                        "Pro cameras. Pro display. Pro performance."
                        white="white"
                        priceWrapper="From $24.95/mo. or $599 with trade‑in."
                    />

                </section>
            </div>
        );
    }
}

export default ThirdHighlight;
