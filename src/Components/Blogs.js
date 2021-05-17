import React, { Component } from "react";

class Blogs extends Component {
	render() {
		if (this.props.data) {
			var blogs = this.props.data.blogs.map(function (blogs) {
				return (
					<li key={blogs.user}>
						<blockquote>
							<p>{blogs.text}</p>
							<cite>{blogs.user}</cite>
						</blockquote>
					</li>
				);
			});
		}

		return (
			<section id="blogs">
				<div className="text-container">
					<div className="row">
						<div className="two columns header-col">
							<h1>
								<span>blogs</span>
							</h1>
						</div>

						<div className="ten columns flex-container">
							<ul className="slides">{blogs}</ul>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Blogs;
