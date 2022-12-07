import React from "react";

import Header from "../component/default/Header";
import Footer from "../component/default/Footer";
import Hero from "../component/home/Hero";
import About from "../component/home/About";
import Event from "../component/home/Event";
import Advantage from "../component/home/Advantage";
import Testimonial from "../component/home/Testimonial";
import Sponsors from "../component/home/Sponsors";

const home = () => {
	return (
		<>
			<Header />
			{/* Hero Section */}
			<Hero />
			{/* About */}
			<About />
			{/* Event */}
			<Event />
			{/* Why choose */}
			<Advantage />
			{/* Testimonial */}
			<Testimonial />
			{/* Sponsors Wrap */}
			<Sponsors />
			<Footer />
		</>
	);
};

export default home;
