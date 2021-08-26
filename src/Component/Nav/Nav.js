import React, { Component } from 'react';
import Headerlink from '../Headerlink/Headerlink';
import logo from "../../css/images/icones/logo-sm.png";
import search from "../../css/images/icones/search-icon-sm.png";
import cart from "../../css/images/icones/cart-sm.png";
class Nav extends Component {
    render() {
        return (
            
                <div className="nav-wrapper fixed-top">
		<div className="container">
			<nav className="navbar navbar-toggleable-sm navbar-expand-md">
			<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target=".navbar-collapse">
			☰
			</button>
            <a className="navbar-brand mx-auto" href="/"><img src={logo }/></a>

			<div className="navbar-collapse collapse">
                                <ul className="navbar-nav nav-justified w-100 nav-fill">
                                    <Headerlink LinkName="mac" LinkUrl="/mac" />
                                    <Headerlink LinkName="iphone" LinkUrl="/iphone" />
                                    <Headerlink LinkName="ipad" LinkUrl="/ipad" />
                                    <Headerlink LinkName="watch" LinkUrl="/watch" />
                                    <Headerlink LinkName="tv" LinkUrl="/tv" />
                                    <Headerlink LinkName="Music" LinkUrl="/Music" />
                                    <Headerlink LinkName= "support" LinkUrl ="/supprot"/>
						<li className="nav-item" ><a className="nav-link js-scroll-trigger" href="/search/"><img src={search}/></a></li>
						<li className="nav-item"><a  className="nav-link js-scroll-trigger" href="/cart/"><img src={cart}/></a></li>
			</ul>
			</div>
			</nav>
		</div>
            </div>
        );
    }
}

export default Nav;
