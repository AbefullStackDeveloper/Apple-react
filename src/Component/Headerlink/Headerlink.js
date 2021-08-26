import React, { Component } from 'react';

class Headerlink extends Component {
    render() {
        return (
            
                <li className="nav-item"><a className="nav-link js-scroll-trigger" href={this.props.LinkUrl}>{ this.props.LinkName}</a></li>
            
        );
    }
}

export default Headerlink;
