import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";
import Invoice from "./routes/invoice";

const rootElement = document.getElementById("root");
render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />}>
				<Route path="expenses" element={<Expenses />} />
				<Route path="invoices" element={<Invoices />}>
					<Route
						index // the index route shares the path of the parent. That's the whole point--it doesn't have a path.
						element={
							<main style={{ padding: "1rem" }}>
								<p>Select an invoice</p>
							</main>
						}
					/>
					<Route path=":invoiceId" element={<Invoice />} />
				</Route>
				<Route
					path="*" // It will match only when no other routes do
					element={
						<main style={{ padding: "1rem" }}>
							<p>There's nothing here!</p>
						</main>
					}
				/>
			</Route>
		</Routes>
	</BrowserRouter>,
	rootElement
);
