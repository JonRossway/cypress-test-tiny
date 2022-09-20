import React from "react";
import { mount } from "@cypress/react";
import TestComponent from "./TestComponent.jsx";

it("renders withoug exploding", () => {
  mount(<TestComponent />);
});
