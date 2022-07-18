describe('visit link-in-bio', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('loads the home page', () => {
    cy.get('[alt*=logo]')
      .should('be.visible')
  })

  it('shows the correct links', () => {
    cy.get('nav li').should('have.length', 6)

    cy.contains('Subscribe to newsletter')
      .and('have.attr', 'href', 'https://ahoy.coffee/#ContactFooter')

    cy.contains('Blog')
      .and('have.attr', 'href', 'https://www.ahoy.coffee/blogs/news/')

    cy.contains('Cold Brew Recipe')
      .and('have.attr', 'href', 'https://www.ahoy.coffee/blogs/news/cold-brew-recipe')

    cy.contains('Instagram')
      .and('have.attr', 'href', 'https://instagram.com/coffee.ahoy/')

    cy.contains('Venmo')
      .and('have.attr', 'href', 'https://venmo.com/u/Coffee-Ahoy/')
  })

  it('shows the featured product', () => {
    cy.get('nav li:first-child')
      .contains('Medium Roast Nicaragua La Bastilla')
      .and('contain', '$15/ea')
      .and('contain', 'grape in the cup.')
      .and('have.attr', 'href', 'https://ahoy.coffee/collections/frontpage/products/nicaragua-la-bastilla')

    cy.get('figure img')
      .should('have.attr', 'src')
      .and('include', 'IMG_0621_503x.jpg')
  })
})
