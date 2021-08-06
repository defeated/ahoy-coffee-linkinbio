describe('visit link in bio', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('loads the home page', () => {
    cy.get('[alt*=logo]')
      .should('be.visible')
  })

  it('shows the correct links', () => {
    cy.get('nav li')
      .should('have.length', 5)

    cy.contains('Buy Fresh Roasted Coffee')
      .and('have.attr', 'href', 'https://www.ahoy.coffee/')
      .and('have.attr', 'data-icon', 'ShoppingCartIcon')

    cy.contains('Blog')
      .and('have.attr', 'href', 'https://www.ahoy.coffee/blogs/news/')
      .and('have.attr', 'data-icon', 'NewspaperIcon')

    cy.contains('Cold Brew Recipe')
      .and('have.attr', 'href', 'https://www.ahoy.coffee/blogs/news/cold-brew-recipe')
      .and('have.attr', 'data-icon', 'DocumentTextIcon')

    cy.contains('Instagram')
      .and('have.attr', 'href', 'https://instagram.com/coffee.ahoy/')
      .and('have.attr', 'data-icon', 'CameraIcon')

    cy.contains('Venmo')
      .and('have.attr', 'href', 'https://venmo.com/u/Coffee-Ahoy/')
      .and('have.attr', 'data-icon', 'CreditCardIcon')
  })
})
