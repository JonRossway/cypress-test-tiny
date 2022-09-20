// import React from "react";
// import ReactDOM from "react-dom";
// import ReactApp from "../../react-app";
// import "lib/vendor/materialize.min.js";
// import "app/styles/materialize/materialize.scss";
// import "app/styles/style.less";
import "./commands";

// ReactDOM.render(
//     <React.StrictMode>
//         <ReactApp />
//     </React.StrictMode>,
//     document.getElementById("react-content")
// );

// ***********************************************************
// This example support/component.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************
import { mount } from "cypress/react";

Cypress.Commands.add("mount", mount);

// Example use:
// cy.mount(<MyComponent />)
