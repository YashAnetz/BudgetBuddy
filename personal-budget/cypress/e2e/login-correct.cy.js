/// <reference types="Cypress" />

describe("login tests", () => {
  it("does work with correct credentials", () => {
    cy.eyesOpen({
      appName: "Personal Budget",
      testName: "Fill form to login",
    });
    cy.visit("/#/home");
    cy.contains("a.nav-link", "Login / Sign up").click();

    cy.hash().should("eq", "#/login");

    cy.eyesCheckWindow({
      tag: "Login page",
      target: "window",
      fully: true,
    });

    // Corrected the data attribute selectors by adding the missing closing bracket
    cy.get("[data-cy=username").type("y@yash.com").should("have.value", "y@yash.com");
    cy.get("[data-cy=password").type("1234").should("have.value", "1234");
    cy.get("[data-cy=login-form").submit();

    cy.hash().should("eq", "#/dashboard");

    cy.eyesCheckWindow({
      tag: "Dashboard",
      target: "window",
      fully: true,
    });

    cy.eyesClose();
  });
});
