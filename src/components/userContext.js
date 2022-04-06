import React from "react";
import { createContext } from "react/cjs/react.production.min";

// 1. Create the context
const UserContext = React.createContext();

// every context Object, created using the createContext() comes with a "provider" and a "consumer" react component
// changing them to more readeable names, we have...

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;
