import React from "react";

const Footer = () => {
	return (
		<>
			<footer>
				<div className="w-100 pt-90 pb-40 blue-layer opc2 position-relative">
					<div
						className="fixed-bg back-blend-multiply bg-color99"
						style={{ backgroundImage: "url(/assets/images/parallax99.png)" }}
					/>
					<div className="container">
						<div className="row">
							<div className="col-md-2 col-sm-6 col-lg-2 col-12">
								<div className="widget w-100 mb-50">
									<div className="sign-up w-100">
										<img
											src="/assets/images/logo-putih.png"
											alt=""
											className="img-fluid"
										/>
									</div>
								</div>
							</div>
							<div className="col-md-5 col-sm-6 col-lg-4 col-12">
								<div className="widget w-100 mb-50">
									<div className="track w-100">
										<span className="d-block mb-3">
											admin@putiheventmanagement.id
										</span>
										<span className="d-block"> Senin-Jumat (09.00-17.00)</span>
										<span className="d-block">
											Jl Radio IV No.8B Barito, Kebayoran Baru, Jakarta 12130.
										</span>
									</div>
								</div>
							</div>
							<div className="col-md-4 col-sm-6 col-lg-3 col-12">
								<div className="widget w-100 mb-50 track">
									<h4 className="mb-0 text-left mb-2">Navigation</h4>
									<ul className="mb-0 list-unstyled w-100 text-left">
										<li>
											<a href="#" title>
												Home{" "}
											</a>
										</li>
										<li>
											<a href="#" title>
												Services{" "}
											</a>
										</li>
										<li>
											<a href="/indexPorto.html" title>
												Portofolio{" "}
											</a>
										</li>
										<li>
											<a href="#" title>
												Contact{" "}
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-md-4 col-sm-6 col-lg-3 col-12">
								<div className="widget w-100 mb-50">
									<div className="social-links4 d-flex flex-wrap">
										<a
											className="facebook"
											href="#"
											title="Facebook"
											target="_blank"
										>
											<i className="fab fa-instagram" />
										</a>
										<a
											className="pinterest"
											href="#"
											title="Pinterest"
											target="_blank"
										>
											<i className="fab fa-youtube" />
										</a>
										<a
											className="twitter"
											href="#"
											title="Twitter"
											target="_blank"
										>
											<i className="fab fa-linkedin" />
										</a>
										<a className="vimeo" href="#" title="Vimeo" target="_blank">
											<i className="fab fa-whatsapp" />
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
			<div className="bottom-bar w-100">
				<div className="container">
					<div className="bottom-bar-inner text-center w-100">
						<p className="mb-0">
							Copyright © 2022 putiheventmanagement.id All rights reserved
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
