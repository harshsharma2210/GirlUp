import React, { Component } from "react";

class Resume extends Component {
	render() {
		if (this.props.data) {
			var skills = this.props.data.skills.map(function (skills) {
				return (
					<div className="skill__container">
						<div class="image">
							<img className="skills__image" src={skills.img} alt="GirlUp" />
						</div>
						<h2>{skills.name}</h2>
						<a href="#" class="skills__button">
							{skills.button}
						</a>
					</div>
				);
			});
		}

		return (
			<section id="resume">
				<div className=" row skill">
					<div className="three columns header-col">
						<h1>
							<span>Get Involved</span>
						</h1>
					</div>

					<div className="nine columns main-col">
						<div className="bars">
							<div className="skills">{skills}</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Resume;
