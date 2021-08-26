import React, { Component } from 'react';
import CommonFirstSecondThird from './CommonFirstSecondThird';
class SecondHighlight extends Component {
    render() {
        return (
            <div>
                <section className="second-hightlight-wrapper">
                    <CommonFirstSecondThird
                        black="black"
                        titleWrapper='MacBookAir'
                        NewWrapper="New"
                        descriptionWrapper='Twice the speed. Twice the storage.'
                        black="black"
                        priceWrapper=' From $999.'
                    />
                    
                    
                
                    
                    
                    
                </section>
            </div>
        );
    }
}

export default SecondHighlight;
