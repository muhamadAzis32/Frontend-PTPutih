import React from "react";

const About = () => {
	return (
		<section>
			<div className="w-100 pb-100 position-relative">
				<div className="container">
					<div className="sec-title mb-70 w-100 text-center">
						<div className="sec-title-inner d-inline-block">
							<h3 className="mb-3">
								Make Your Event <br />
								Memorable
							</h3>
						</div>
					</div>
					<div className="about-wrap w-100">
						<p className="text-left" />
						<div className="row">
							<div className="col-md-12 col-sm-12 col-lg-6 order-lg-1">
								<div className="about-img w-100">
									<div className="about-img-caro">
										<div className="about-img-item">
											<img
												className="img-fluid w-100"
												src="/assets/images/resources/event-img1-9.jpg"
												alt="About Image 1"
											/>
										</div>
										<div className="about-img-item">
											<img
												className="img-fluid w-100"
												src="/assets/images/resources/about-img5.jpg"
												alt="About Image 2"
											/>
										</div>
										<div className="about-img-item">
											<img
												className="img-fluid w-100"
												src="/assets/images/resources/event-img1-6.jpg"
												alt="About Image 3"
											/>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-12 col-sm-12 col-lg-6">
								<div className="about-desc w-100">
									<div className="about-info-wrap w-100">
										<div className="row">
											<div className="col-md-6 col-sm-6 col-lg-12">
												<div className="w-100">
													<p>
														PT Putih Event Management adalah jasa event
														organizer profesional yang siap membantu menyediakan
														layanan dan fasilitas berbagai event untuk
														menciptakan nuansa acara yang berkesan dan menjadi
														memory terbaik.
													</p>
													<h5 className="d-block thm-clr">VISI</h5>
													<p className="about-desc">
														Menjadi event organizer yang dikenal dengan kualitas
														layanan, manajemen, dan operasional yang berstandar
														tinggi, terus berkembang, fleksibel, dan terbuka
														untuk kebutuhan klien.
													</p>
												</div>
											</div>
											<div className="col-md-6 col-sm-6 col-lg-12">
												<div className="w-100">
													<h5 className="d-block thm-clr">MISI</h5>
													<div className="widget d-flex flex-wrap w-100 mb-50">
														<ul className="list-unstyled">
															<li>
																<a href="#" title>
																	Berkomitmen menawarkan solusi dan hasil nyata
																	untuk kesuksesan acara klien kami.
																</a>
															</li>
															<li>
																<a href="#" title>
																	Memberikan pelayanan jasa event organizer
																	dengan ide dan konsep kreatif kepada
																	pelanggan.
																</a>
															</li>
															<li>
																<a href="#" title>
																	Membangun dan menjaga hubungan serta
																	komunikasi sebaik-baiknya.
																</a>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
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

export default About;
