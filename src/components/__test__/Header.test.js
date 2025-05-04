import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../Header';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import appStore from './../../utils/appStore';
import UserContext from './../../utils/UserContext';

describe("Header Component", () => {

    it("Should load Header with logo, nav links, cart, and login button", () => {
        render(
            <MemoryRouter>
                <Provider store={appStore}>
                    <UserContext.Provider value={{ loggedInUser: "John Doe" }}>
                        <Header />
                    </UserContext.Provider>
                </Provider>
            </MemoryRouter>
        );

        // Check if logo is present
        const logo = screen.getByAltText("Food Delivery Logo");
        expect(logo).toBeInTheDocument();

        // Check if navigation links are present
        expect(screen.getByText("Home")).toBeInTheDocument();
        expect(screen.getByText("About Us")).toBeInTheDocument();
        expect(screen.getByText("Contact Us")).toBeInTheDocument();
        expect(screen.getByText("Grocery")).toBeInTheDocument();

        // Check if cart link is present
        expect(screen.getByText(/Cart/i)).toBeInTheDocument();

        // Check if login button is present
        const loginButton = screen.getByRole("button", { name: "Login" });
        expect(loginButton).toBeInTheDocument();

        // Check if user name is displayed
        expect(screen.getByText("John Doe")).toBeInTheDocument();
    });

    it("Should toggle Login/Logout button when clicked", () => {
        render(
            <MemoryRouter>
                <Provider store={appStore}>
                    <UserContext.Provider value={{ loggedInUser: "John Doe" }}>
                        <Header />
                    </UserContext.Provider>
                </Provider>
            </MemoryRouter>
        );

        const loginButton = screen.getByRole("button", { name: "Login" });
        expect(loginButton).toBeInTheDocument();

        // Click the button
        fireEvent.click(loginButton);

        // After click, it should become Logout
        expect(screen.getByRole("button", { name: "Logout" })).toBeInTheDocument();
    });

});
