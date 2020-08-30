import { Then } from "cypress-cucumber-preprocessor/steps";

Then(`I have a post called {string}`, (title) => {
  cy.findAllByText(title).should("exist");
});
