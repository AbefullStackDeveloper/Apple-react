import React, { Component } from 'react';
import FirstHighlight from './FirstHighlight';
import Rating from '../Rating/Rating';
import SecondHighlight from './SecondHighlight';
import ThirdHighlight from './ThirdHighlight';
import Fourth from './Fourth';
import Fifth from './Fifth';
import Youtube from '../Youtube/Youtube';
  import AppleNews from '../AppleNews/AppleNews.js';
import appletv from '../../css/images/icones/apple-tv-logo.png';
import banker from '../../css/images/icones/banker.png';
import watch from '../../css/images/icones/watch-series5-logo.png';
import arcade from '../../css/images/icones/arcade.png';
import "../Rating/Rating.css"
import '../Youtube/Youtube.css'
//  import '../AppleNews/AppleNews.css'


class Main extends Component {
    render() {
        return (
            <div>
	{/* <!-- Alert Section --> */}
	<section className="alert-section top-50">
		<div className="container">
			<div className="alert-title">
				We’re open for you.
			</div>
			<div className="alert-text">
				Our retail stores are closed, but you can buy our products here online and get fast, free delivery. If you need help finding the right product or have a question on your order, chat online with a Specialist or call 1-800-MY-APPLE.<br/>
				For service and support, visit <a href="https://support.apple.com/">support.apple.com</a>.
			</div>
		</div>
	</section>

    {/* <!-- First section starts here --> */}
				<FirstHighlight />
				<Rating/>
	{/* <!-- First section starts here --> */}

	{/* <!-- Second section starts here --> */}
        <SecondHighlight/>
	{/* <!-- Second section starts here --> */}

	{/* <!-- Third section starts here --> */}
        <ThirdHighlight/>
	{/* <!-- Third section ends here --> */}

			{/* <!-- Fourth section starts here --> */}
			<Fourth/>
	{/* <!-- Fourth section ends here --> */}

	{/* <!-- Fifth section starts here --> */}
		<section className="fifth-heghlight-wrapper">
			<div className="container-fluid">
							<div className="row">
					<div className="left-side-wrapper col-sm-12 col-md-6">
						<div className="left-side-container">
							<div className="top-logo-wrapper">
								<div className="logo-wrapper">
									<img src={appletv}/>
								</div>
							</div>

							<div className="tvshow-logo-wraper">
								<img src={banker}/>
							</div>

							<div className="watch-more-wrapper">
								<a href="#">Watch now on the Apple TV App</a>
							</div>
						</div>
								</div>
								<Fifth sideWrapper="right-side-wrapper"
								container="right-side-container"
									imgName={watch}
									description="With the Always-On Retina display.
								You’ve never seen a watch like this."
									linkName="Learn more"
									linkName2="Buy"
								/>
				</div>
			</div> 
		</section>
		{/* <!-- Fifth section ends here --> */}
		{/* <!-- Sixth section starts here --> */}
		<section className="sixth-heghlight-wrapper">
			<div className="container-fluid">
				<div className="row">
				<Fifth sideWrapper="left-side-wrapper"
								container="left-side-container"
									imgName={arcade}
								description="Agent 8 is a small hero on a big mission."
								white="white"
									linkName="Play now"
									super="2"
									linkName2="Learn about Apple Arcad"
								/>
					<div className="right-side-wrapper col-sm-12 col-md-6">
						<div className="right-side-container">
							<div className="title-wraper">
								Apple Card Monthly Installments 
							</div> 
							<div className="description-wraper">
								Pay for your next iPhone over time, interest-free with Apple Card.
							</div>
							<div className="links-wrapper">
								<ul>
									<li><a href="">Learn more</a></li>
									<li><a href="">Apply now</a></li>
								</ul> 
							</div>
						</div>
					</div>					
				</div>
			</div> 
				</section>
				<section className="youtubeVideosWrapper top-100">
					<Youtube/>

				</section>
				{/* <section> */}
				{/* <AppleNews/>  */}
				{/* </section> */}
		{/* <!-- Sixth section ends here --> */}
				</div>
			);
		}
	}

export default Main;
