import { Given } from "cypress-cucumber-preprocessor/steps";

Given("@home page", () => {
  cy.visit("/");
});
