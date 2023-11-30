describe('visit home', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays the experience text', () => {
    cy.get('a')
    .contains('experience').click();
    cy.get('th')
    .contains('Position');

  })

  it('displays the modal text', () => {
    cy.get('a')
    .contains('experience').click();
    cy.get('button').first()
    .click();
    cy.get('div')
    .contains('Oppia Foundation');

  })
//  it('renders the image', () => {
//    cy.get('img')
//    .should('be.visible')
//    .and(($img) => {
//      expect($img[0].naturalWidth).to.be.greaterThan(0);
//    })
//  })
})
