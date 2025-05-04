import { render, screen } from '@testing-library/react';
import RestaurantCard, { withPromotedLabel } from '../RestaurantCard';
import { MemoryRouter } from 'react-router-dom';
import UserContext from '../../utils/UserContext';

// Mock data for a restaurant
const MOCK_RESTAURANT = {
    info: {
        name: "Testaurant",
        cuisines: ["Italian", "Mexican"],
        avgRating: "4.5",
        costForTwo: "₹400 for two",
        cloudinaryImageId: "mock-image-id",
        sla: {
            deliveryTime: 30
        }
    }
};

describe("RestaurantCard Component", () => {

    it("Should render RestaurantCard with given restaurant data", () => {
        render(
            <MemoryRouter>
                <UserContext.Provider value={{ loggedInUser: "John Doe" }}>
                    <RestaurantCard resData={MOCK_RESTAURANT} />
                </UserContext.Provider>
            </MemoryRouter>
        );

        // Check if restaurant name is rendered
        expect(screen.getByText("Testaurant")).toBeInTheDocument();

        // Check if cuisines are rendered
        expect(screen.getByText("Italian, Mexican")).toBeInTheDocument();

        // Check if average rating is rendered
        expect(screen.getByText(/4.5/)).toBeInTheDocument();

        // Check if cost for two is rendered
        expect(screen.getByText("₹400 for two")).toBeInTheDocument();

        // Check if delivery time is rendered
        expect(screen.getByText(/30 mins/)).toBeInTheDocument();
    });

    it("Should show 'Promoted' label when wrapped with withPromotedLabel HOC", () => {
        const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

        render(
            <MemoryRouter>
                <UserContext.Provider value={{ loggedInUser: "John Doe" }}>
                    <RestaurantCardPromoted resData={MOCK_RESTAURANT} />
                </UserContext.Provider>
            </MemoryRouter>
        );

        // Check if promoted label is present
        expect(screen.getByText("Promoted")).toBeInTheDocument();
    });

});
