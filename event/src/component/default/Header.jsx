import React from "react";

const Header = () => {
	return (
		<>
			<header className="stick style1 w-100">
				<div className="container">
					<div className="logo-menu-wrap w-100 d-flex flex-wrap justify-content-between align-items-start">
						<div className="logo">
							<h1 className="mb-0">
								<a href="index.html" title="Home">
									<img
										className="img-fluid"
										src="/assets/images/logo-putih.png"
										alt="Logo"
										srcSet="/assets/images/logo-putih.png"
									/>
								</a>
							</h1>
						</div>
						<nav className="d-inline-flex align-items-center">
							<div className="header-left">
								<ul className="mb-0 list-unstyled d-inline-flex">
									<li>
										<a href="#" title>
											Home
										</a>
									</li>
									<li className="menu-item-has-children">
										<a href="#" title>
											Service
											<img
												src="/assets/images/arrow-down.svg"
												className="pl-2"
												alt="arrow"
											/>
										</a>
										<ul className="children list-unstyled">
											<li>
												<a href="#" title>
													Hybrid Event
												</a>
											</li>
											<li>
												<a href="#" title>
													Offline Event
												</a>
											</li>
											<li>
												<a href="#" title>
													Sistem Registrasi &amp; Ticketing
												</a>
											</li>
											<li>
												<a href="#" title>
													Broadcast
												</a>
											</li>
											<li>
												<a href="#" title>
													Virtual Event Event
												</a>
											</li>
										</ul>
									</li>
									<li>
										<a href="./indexPorto.html" title>
											Portofolio
										</a>
									</li>
									<li>
										<a href="./contact.html" title>
											Contact
										</a>
									</li>
								</ul>
							</div>
							<div className="header-right-btns">
								<a className="menu-btn" href="#" title>
									<i className="flaticon-menu" />
								</a>
							</div>
						</nav>
					</div>
				</div>
			</header>
			{/* Mobile Header */}
			<div className="menu-wrap">
				<span className="menu-close">
					<i className="fas fa-times" />
				</span>
				<ul className="mb-0 list-unstyled w-100">
					<li>
						<a href title>
							Home
						</a>
					</li>
					<li>
						<a href="/indexPorto.html" title>
							Portofolio
						</a>
					</li>
					<li className="menu-item-has-children">
						<a href="#" title>
							Service
						</a>
						<ul className="children list-unstyled">
							<li>
								<a href title>
									Hybrid Event
								</a>
							</li>
							<li>
								<a href title>
									Offline Event
								</a>
							</li>
							<li>
								<a href title>
									Sistem Registrasi &amp; Ticketing{" "}
								</a>
							</li>
							<li>
								<a href title>
									Broadcast
								</a>
							</li>
							<li>
								<a href title>
									Virtual Event Event{" "}
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a href title>
							Contact
						</a>
					</li>
				</ul>
			</div>
		</>
	);
};

export default Header;
