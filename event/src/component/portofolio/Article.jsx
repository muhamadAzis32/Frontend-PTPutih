import React from "react";

const Article = () => {
	return (
		<section>
			<div className="w-100 pb-120 position-relative">
				<div className="container">
					<div className="sec-title btm-icn mb-20 w-100 text-center">
						<div className="sec-title-inner d-inline-block">
							<h3 className="mb-0">Event Terbaru</h3>
						</div>
					</div>
					<div className="blog-wrap w-100">
						<div className="blog-caro">
							<div className="post-style1 w-100 position-relative">
								<div className="post-meta">
									<span className="post-date thm-clr">
										20<i className="d-block">Feb, 2010</i>
									</span>
								</div>
								<div className="post-img overflow-hidden position-relative w-100">
									<a href="blog-detail.html" title>
										<img
											className="img-fluid w-100"
											src="assets/images/resources/post-img1-1.jpg"
											alt="PostImage1"
										/>
									</a>
								</div>
								<div className="post-info w-100">
									<h3 className="mb-0">
										<a href="blog-detail.html" title>
											New Music Fridays: Festicket Staff Picks
										</a>
									</h3>
									<p className="mb-0">
										It’s no secret that the digital industry is booming. From
										ching out to digital agencies, responding to the new po ming
										overcrowded, heaving with agencies.
									</p>
								</div>
							</div>
							<div className="post-style1 w-100 position-relative">
								<div className="post-meta">
									<span className="post-date thm-clr">
										22<i className="d-block">Mar, 2011</i>
									</span>
								</div>
								<div className="post-img overflow-hidden position-relative w-100">
									<a href="blog-detail.html" title>
										<img
											className="img-fluid w-100"
											src="assets/images/resources/post-img1-2.jpg"
											alt="PostImage2"
										/>
									</a>
								</div>
								<div className="post-info w-100">
									<h3 className="mb-0">
										<a href="blog-detail.html" title>
											Innovation Festival will convene thousands of makers
										</a>
									</h3>
									<p className="mb-0">
										It’s no secret that the digital industry is booming. From
										ching out to digital agencies, responding to the new po ming
										overcrowded, heaving with agencies.
									</p>
								</div>
							</div>
							<div className="post-style1 w-100 position-relative">
								<div className="post-meta">
									<span className="post-date thm-clr">
										22<i className="d-block">Mar, 2011</i>
									</span>
								</div>
								<div className="post-img overflow-hidden position-relative w-100">
									<a href="blog-detail.html" title>
										<img
											className="img-fluid w-100"
											src="assets/images/resources/post-img1-3.jpg"
											alt="PostImage3"
										/>
									</a>
								</div>
								<div className="post-info w-100">
									<h3 className="mb-0">
										<a href="blog-detail.html" title>
											Innovation Festival will convene thousands of makers
										</a>
									</h3>
									<p className="mb-0">
										It's no secret that the digital industry is booming. From
										ching out to digital agencies, responding to the new po ming
										overcrowded, heaving with agencies.
									</p>
								</div>
							</div>
						</div>
					</div>
					{/* Blog Wrap */}
				</div>
			</div>
		</section>
	);
};

export default Article;
