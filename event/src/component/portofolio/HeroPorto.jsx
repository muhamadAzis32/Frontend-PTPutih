import React from "react";

const HeroPorto = () => {
	return (
		<section>
			<div className="w-100 pt-180 pb-180 page-title-wrap text-center black-layer opc5 position-relative">
				<div
					className="fixed-bg"
					style={{ backgroundImage: "url(assets/images/parallax8.jpg)" }}
				/>
				<div className="container">
					<div className="page-title-inner d-inline-block">
						<h1 className="mb-0">Portofolio</h1>
						<ol className="breadcrumb">
							<li className="breadcrumb-item">
								<a href="index.html" title>
									Home
								</a>
							</li>
							<li className="breadcrumb-item active">Portofolio</li>
						</ol>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroPorto;
