import { createContext } from "react";

/* `React Context` is creating a context object using the `createContext` function from the React
library. This context object is used to share data that can be considered "global" for a tree of
React components, without having to pass props down manually at every level. In this specific
example, a `UserContext` is created with a default value of "Default User". This context can then be
accessed and updated by components within the React application. */

const UserContext = createContext({
    loggedInUser: "Default User",
});

export default UserContext;