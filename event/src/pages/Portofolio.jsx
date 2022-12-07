import React from "react";

import Header from "../component/default/Header";
import Footer from "../component/default/Footer";
import HeroPorto from "../component/portofolio/HeroPorto";
import Porto from "../component/portofolio/Porto";
import Article from "../component/portofolio/Article";

const Portofolio = () => {
	return (
		<>
			<Header />
			<HeroPorto />
			<Porto />
			<Article />
			<Footer />
		</>
	);
};

export default Portofolio;
