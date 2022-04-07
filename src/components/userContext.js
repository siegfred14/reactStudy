import React from "react";
import { createContext } from "react/cjs/react.production.min";

// 1. Create the context
const UserContext = React.createContext("SiegfredDOM");

// every context Object, created using the createContext() comes with a "provider" and a "consumer" react component
// changing them to more readeable names, we have...

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };

// 2. Provide a context value (Wrapping Component in App.js with User Provider)
// 3. Consume the context value

// You can set a default value to your context and the default value is set while creating your context
// it is passed as an argument to the createContext method
