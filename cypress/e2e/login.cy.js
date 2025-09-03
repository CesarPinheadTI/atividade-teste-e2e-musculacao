describe('tela de login', () => {
    beforeEach(() => {
        cy.visit("https://www.hipertrofia.org/forum");
    });
    it("Verificando o login", () => {
        cy.get('#elUserSignIn').click();
        cy.get('#login_popup_email').type('marcela-barreira@tuamaeaquelaursa.com');
        cy.get('#login_popup_password').type('~9E;E9=+U;$g_r3');
        cy.get('button[class="ipsButton ipsButton--primary i-width_100p"]').click();
        cy.url().should('include','/?_fromLogin=1');
    });
});