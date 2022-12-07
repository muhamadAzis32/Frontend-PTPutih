import React from "react";

const Hero = () => {
	return (
		<section>
			<div className="w-100 position-relative">
				<div className="feat-wrap position-relative w-100">
					<div className="feat-item pb-240 d-flex flex-wrap align-items-end">
						<div
							className="feat-img position-absolute w-100"
							style={{
								backgroundImage: "url(/assets/images/bg-landing-page.png)",
							}}
						/>
						<div className="container">
							<div className="row justify-content-between align-items-end">
								<div className="col-md-12 col-sm-12 col-lg-5 order-lg-1" />
								<div className="col-md-12 col-sm-12 col-lg-8">
									<div className="feat-cap w-100">
										<i className="text-white">
											Menciptakan nuansa <strong>acara yang berkesan </strong>
										</i>
										<h3 className="mb-0 text-white">
											Penyedia Jasa Event Management Masa Kini
										</h3>
										<span className="d-block text-white">
											Menyediakan layanan dan fasilitas untuk kegiatan event
											management secara Online, Hybrid, dan Offline
										</span>
										<a
											className="btn px-4 py-2 thm-btn fill-btn mt-4 text-capitalize"
											href
											title
											tabIndex={0}
										>
											Wujudkan Event <br />
											Impianmu Disini
											<span style={{ top: "42.6px", left: "216px" }} />
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
