import React, { Component } from "react";

class About extends Component {
	render() {
		if (this.props.data) {
			var bio = this.props.data.bio;
			var profilepic = "images/" + this.props.data.image;
		}

		return (
			<section id="about">
				<div className="row">
					<div className="twelve columns main-col">
						<h2>Discover what all the buzz is about!</h2>
						<div className="nine columns main-col">
							<p>{bio}</p>
						</div>
						<div className="three columns">
							<img className="profile-pic" src={profilepic} alt="GirlUp" />
						</div>
						<div className="row">
							<div className="columns contact-details">
								<h3>
									{" "}
									<a className="smoothscroll" href="#contact">
										Join us
									</a>
								</h3>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default About;
