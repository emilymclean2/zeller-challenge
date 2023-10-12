import { render, screen } from "@testing-library/react";
import App from "../App";

describe("<App /> ", () => {
	describe("GIVEN app has rendered", () => {
		beforeEach(() => {
			render(<App />);
		});

		it("SHOULD show the title 'User Types'", () => {
			const title = screen.getByText("User Types");
			expect(title).toBeVisible();
		});

		it("SHOULD show the title 'Admin Users'", () => {
			const title = screen.getByText("Admin Users");
			expect(title).toBeVisible();
		});
	});
});
