describe("Navbar test", () => {
  before(function () {
    cy.visit("http://zero.webappsecurity.com/index.html");
  });
  it("should display online banking content", () => {
    cy.get('#onlineBankingMenu > div > strong').click();
    cy.url().should('include', 'online-banking.html');
    cy.get('h1').should('be.visible');
  });

  it("should display feedback content", () => {
    cy.get('#feedback > div > strong').click();
  });

  it("should display homepage content", () => {});
});
