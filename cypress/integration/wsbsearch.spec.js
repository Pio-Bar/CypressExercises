/// <reference types="Cypress" />
Cypress.config().waitForAnimations = true;

describe("WSB search for Angular", () => {
  it("should open WSB page", () => {
    cy.visit("www.wsb.pl/wroclaw");
  });
  it("should check tab with trainings", () => {
    cy.get(".links > .expandable > :nth-child(1)").contains("Studia");
  });
  it("should open search icon and find phrase", () => {
    cy.get(".search-icon > a").click({ force: true });
    cy.get("#header-search > .grid-wrapper > .search-input > .search").type(
      "Angular {enter}"
    );
  });
  it("should check the phrase",
    () => {
      cy.get(".study-directions").should("contain", "Programista Front-End");
    });
});
