/// <reference types="cypress" />

context("Viewport", () => {
  beforeEach(() => {
    cy.visit("../../index.html");
    cy.eyesOpen({
      appName: "Demo App",
      testName: "Testing landing page",
    });
  });

  it("cy.viewport() - set the viewport size and dimension", () => {
    cy.get('[name="header"]').contains("This is Heading");
    cy.eyesCheckWindow({
      tag: "Header page",
      target: "name=header",
      fully: true,
    });
    cy.get('[name="content1"]').contains("This a paragraph.");
    cy.eyesCheckWindow({
      tag: "Content page",
      target: "name=content1",
      fully: true,
    });
    cy.eyesClose();
  });
});
