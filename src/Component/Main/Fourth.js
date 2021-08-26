import React, { Component } from 'react';
 import Fourthprops from "./Fourthprops"
class Fourth extends Component {
    render() {
        return (
                    <div>
                        <section className="fourth-heghlight-wrapper">
                        <div className="container-fluid">
                        <div className="row">
                            
                                <Fourthprops
                                    sideWrapper="left-side-wrapper"
                                        container="left-side-container"
                                            titleWrapper="iPhone 11 "
                                            description="Just the right amount of everything."
                                            price="From $18.70/mo. or $499 with trade‑in."
                                            linkWrapper="Apply now"
                                />
                            <Fourthprops
                                white="white"
                                    sideWrapper="right-side-wrapper"
                                        container="right-side-container"
                                            titleWrapper=" Get the latest CDC response to COVID-19. "
                                            linkWrapper="Watch the PSA"
                                            />
                                        
                            </div>
                        </div>
                        
                        </section>
                        </div> 
            
        );
    }
}

export default Fourth;
