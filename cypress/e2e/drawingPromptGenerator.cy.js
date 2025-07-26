describe('Main page tests', () => {
  it('Visit site', () => {
    cy.visit('/')
  })

  it('Get new prompt', () => {
    cy.visit('/')
    cy.wait(1000)
    cy.getDataTest('new-prompt-button').click()
  })

  it('Visit photographer profile', () => {
    cy.visit('/')
    cy.wait(1000)
    cy.getDataTest('profile-link').click()
  })

  it('Get new prompts multiple', () => {
    cy.visit('/')
    cy.wait(1000)
    cy.getDataTest('new-prompt-button').click()
    cy.wait(1000)
    cy.getDataTest('new-prompt-button').click()
    cy.wait(1000)
    cy.getDataTest('new-prompt-button').click()
  })

  it('Fail getting initial prompt', () => {
    cy.intercept('GET', `https://whaftqpyevfgxqxdfixi.supabase.co/rest/v1/DrawingPrompts*`, {
      forceNetworkError: true
    }).as('getDrawingPrompts');
    cy.visit('/');
    cy.wait('@getDrawingPrompts');

    cy.getDataTest('retry-button').should('exist');
    cy.getDataTest('retry-button').click();
  });

})
