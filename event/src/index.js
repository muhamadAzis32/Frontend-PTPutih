import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Helmet } from "react-helmet";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
		<Helmet>
			<script type="text/javascript" src="/assets/js/jquery.min.js"></script>
			<script type="text/javascript" src="/assets/js/popper.min.js"></script>
			<script type="text/javascript" src="/assets/js/bootstrap.min.js"></script>
			<script type="text/javascript" src="/assets/js/wow.min.js"></script>
			<script type="text/javascript" src="/assets/js/counterup.min.js"></script>
			<script
				type="text/javascript"
				src="/assets/js/jquery.downCount.js"
			></script>
			<script
				type="text/javascript"
				src="/assets/js/jquery.fancybox.min.js"
			></script>
			<script
				type="text/javascript"
				src="/assets/js/perfect-scrollbar.min.js"
			></script>
			<script type="text/javascript" src="/assets/js/slick.min.js"></script>
			<script
				type="text/javascript"
				src="/assets/js/custom-scripts.js"
			></script>
		</Helmet>
	</React.StrictMode>
);
