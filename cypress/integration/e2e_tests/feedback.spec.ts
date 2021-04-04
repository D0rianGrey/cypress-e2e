describe("Feedback test", () => {
    before(function () {
        cy.visit("http://zero.webappsecurity.com/index.html");
    });

    it("should load feedback form", () => {
        cy.get('#feedback > div > strong').click();
        cy.get('#feedback-title').should('be.visible');
    });

    it("should fill feedback form", () => {
        cy.get('#name').type('Eugene');
        cy.get('#email').type('test@test.ua');
        cy.get('#subject').type('test subject');
        cy.get('#comment').type('test comment');
    });

    it("should submit feedback form", () => {
        cy.get('.btn-signin').click();
    });

    it("should display feedback message", () => {
        cy.url().should('contain','sendFeedback.html');
    });
});