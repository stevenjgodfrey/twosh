describe('visit home', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays the education text', () => {
    cy.get('a')
    .contains('education').click();
    cy.get('th')
    .contains('Qualification');
  })

})
