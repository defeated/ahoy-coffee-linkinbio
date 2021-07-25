import { mount } from '@cypress/vue'
import AppHeader from '@/components/AppHeader.vue'

describe('AppHeader', () => {
  it('renders the logo', () => {
    mount(AppHeader)
      .get('header > img')
      .should('be.visible')
      .and(($logo) => {
        expect($logo[0].naturalWidth).to.be.greaterThan(0)
      })
  })
})
