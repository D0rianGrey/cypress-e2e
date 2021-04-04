describe("Login / Logout test", () => {
    before(function () {
        cy.visit("http://zero.webappsecurity.com/index.html");
        cy.url().should('include', 'index.html');
        cy.get('#signin_button').click();
    });

    it("should try to login with invalid data", () => {
        cy.get('h3').should('be.visible');
        cy.get('#user_login').type('some invalid login');
        cy.get('#user_password').type('some invalid password');
        cy.get('.btn').click();
    });

    it("should display error message", () => {
        cy.get('.alert')
            .should('be.visible')
            .and('contain', 'Login and/or password are wrong.');
    });

    it("should login to application", () => {
        cy.fixture('user').then(user => {
            const username = user.login;
            const password = user.password;

            cy.get('#user_login').type(username);
            cy.wait(3000);
            cy.get('#user_password').type(password);
            cy.wait(3000);
            cy.get('#user_remember_me').check();
            cy.get('.btn').click();
        });

        cy.get('h1').should('contain', 'Service Temporarily Unavailable');
    });

    it("should logout from the application", () => {
        //TODO
    });
});