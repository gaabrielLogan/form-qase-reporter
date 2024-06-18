import { qase } from 'cypress-qase-reporter/mocha'

describe('Formulário', () => {
    beforeEach(() => {
        cy.visit('https://gaabrielogan2.github.io/app-car')
    });

    qase(1,
        it('Preenchimento do formulario com sucesso', () => {
            cy.get('#modelo').type('Pedro');
            cy.get('#modelo').should('have.value', 'Pedro');
       ;
        })
)
});
