import { mount } from '@cypress/vue'
import App from '@/components/App.vue'

describe('App', () => {
  it('renders list of links', () => {
    const links = [1, 2]
    mount(App, { propsData: { links }})

    cy.get('nav ul li')
      .should('have.length', links.length)
  })
})
