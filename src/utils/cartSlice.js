import { createSlice } from '@reduxjs/toolkit';

//Slices
const cartSlice = createSlice({
    // name of the slice
    name: 'cart',
    // initial state of the slice
    initialState: {
        items:[],
    },
    // reducers of the slice
    reducers: {

        // mutating the state here 

        /* These are the reducers defined in the `cartSlice` object. Each reducer is a function that
        takes the current state and an action as parameters, and then updates the state based on the
        action. */

        /* The `addItem` reducer in the `cartSlice` object is a function that takes the current state
        and an action as parameters. When this reducer is called with an action, it pushes the
        payload of that action (usually an item to be added to the cart) into the `items` array in
        the state. This effectively adds an item to the cart when the `addItem` action is
        dispatched. */
        addItem: (state, action) => {
            state.items.push(action.payload);
        },

        /* The `removeItem` reducer in the `cartSlice` object is a function that takes the current state
        and an action as parameters. When this reducer is called with an action, it removes the last
        item from the `items` array in the state using the `pop()` method. This effectively removes
        the last item from the cart when the `removeItem` action is dispatched. */
        removeItem: (state, action) => {
            state.items.pop();
        },



        /* The `clearCart` reducer in the `cartSlice` object is a function that takes the current state
        as a parameter. When this reducer is called, it sets the `items` array in the state to an
        empty array by assigning `state.items.length = 0`. This effectively clears all items from the
        cart when the `clearCart` action is dispatched. */
        clearCart: (state) => {
            state.items.length = 0;
        },
    }
})

// Action 
export const { addItem, removeItem, clearCart } = cartSlice.actions;

// Selector // Reducer
export default cartSlice.reducer;


