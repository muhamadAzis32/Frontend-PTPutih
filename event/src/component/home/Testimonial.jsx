import React from "react";

const Testimonial = () => {
	return (
		<section>
			<div className="w-100 pb-100 position-relative">
				<div className="container">
					<div className="sec-title mb-70 w-100 text-center">
						<div className="sec-title-inner d-inline-block">
							<h3 className="mb-3">Testimoni Customer Kami</h3>
						</div>
					</div>
					<div className="testi-wrap d-flex flex-wrap w-100">
						<div className="testi-nav-caro">
							<div>
								<div className="testi-nav-img">
									<img
										className="img-fluid"
										src="/assets/images/resources/testi-img1.jpg"
										alt="Testimonials Image 1"
									/>
								</div>
							</div>
							<div>
								<div className="testi-nav-img">
									<img
										className="img-fluid"
										src="/assets/images/resources/testi-img2.jpg"
										alt="Testimonials Image 2"
									/>
								</div>
							</div>
						</div>
						<div className="testi-caro">
							<div>
								<div className="testi-item w-100">
									<p className="mb-0">
										“ Alhamdulillah semua berjalan lancar berkat bantuan Tim
										Putih Event Management. Semua bintang tamu merasa puas
										dengann venue dan vendor yang disediakan. Para penonton juga
										terlihat antusias dan semarak.”
									</p>
									<div className="testi-item-inner">
										<span className="d-block">Virtual Concert Gajayana</span>
										<h4 className="mb-0">Ibu Dewi</h4>
									</div>
								</div>
							</div>
							<div>
								<div className="testi-item w-100">
									<p className="mb-0">
										“ Acara Grand Launching produk baru di cabang utama DyShoes
										berjalan lancar dan meriah. Kerjasama dan kontribusi Tim
										Putih event Mnagament sangat baik sehingga banyak pihak
										turut merasa puas.”
									</p>
									<div className="testi-item-inner">
										<span className="d-block">
											Product Launch Brand DyShoes
										</span>
										<h4 className="mb-0">Bapak Eddy</h4>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* Testimonials Wrap */}
				</div>
			</div>
		</section>
	);
};

export default Testimonial;
