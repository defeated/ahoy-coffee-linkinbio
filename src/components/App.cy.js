import { mount } from '@cypress/vue'
import App from '@/components/App.vue'

describe('App', () => {
  it('renders list of links', () => {
    mount(App)

    cy.get('nav ul li')
      .should('have.length', 5)
  })
})
