import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import '@testing-library/jest-dom';

describe("Contact Component", () => {

    test("Should Load Contact Us Component", () => {
        render(<Contact />);

        const heading = screen.getByRole("heading", { level: 1 }); // specify h1

        expect(heading).toBeInTheDocument();
    });

    // Test ot it is same
    it("Should Load Button inside Component", () => {
        render(<Contact />);

        // const button = screen.getByRole("button"); // specify h1
        const button = screen.getByText("Submit"); // specify h1

        expect(button).toBeInTheDocument();
    });

    test("Should Load Input fields inside Component", () => {
        render(<Contact />);

        const inputs = screen.getAllByRole("textbox");

        expect(inputs.length).toBe(3); // because you have 3 input fields (Name, Email, Phone)
    });
})
