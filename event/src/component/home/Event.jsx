import React from "react";

const Event = () => {
	return (
		<section>
			<div className="w-100 pb-100 pt-100 gray-layer opc9 position-relative">
				<div
					className="fixed-bg patern-bg"
					style={{ backgroundImage: "url(/assets/images/patter-bg1.jpg)" }}
				/>
				<div className="container">
					<div className="features-wrap w-100">
						<h3 className="mb-0 text-center text-capitalize">
							Untuk membantu dan mempermudah penyelenggaraan event anda, kami
							menawarkan paket event organizer sebagai berikut
						</h3>
						<div className="features-inner w-100">
							<div className="row mrg15 justify-content-md-center">
								<div className="col-md-6 col-sm-6 col-lg-4">
									<div className="feature-box mt-15 w-100">
										<a
											href="#"
											title
											style={{
												backgroundImage: "url(/assets/images/feature-img1.jpg)",
											}}
										>
											Live Broadcasting System
										</a>
									</div>
								</div>
								<div className="col-md-6 col-sm-6 col-lg-4">
									<div className="feature-box mt-15 w-100">
										<a
											href="#"
											title
											style={{
												backgroundImage: "url(/assets/images/feature-img2.jpg)",
											}}
										>
											Virtual Event
										</a>
									</div>
								</div>
								<div className="col-md-6 col-sm-6 col-lg-4">
									<div className="feature-box mt-15 w-100">
										<a
											href="#"
											title
											style={{
												backgroundImage: "url(/assets/images/feature-img3.jpg)",
											}}
										>
											Hybrid Event
										</a>
									</div>
								</div>
								<div className="col-md-6 col-sm-6 col-lg-5">
									<div className="feature-box mt-15 w-100">
										<a
											href="#"
											title
											style={{
												backgroundImage: "url(/assets/images/feature-img4.jpg)",
											}}
										>
											Offline Event
										</a>
									</div>
								</div>
								<div className="col-md-6 col-sm-6 col-lg-5">
									<div className="feature-box mt-15 w-100">
										<a
											href="#"
											title
											style={{
												backgroundImage: "url(/assets/images/feature-img5.jpg)",
											}}
										>
											Sistem Registrasi &amp; Ticketing
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* Features Wrap */}
				</div>
			</div>
		</section>
	);
};

export default Event;
