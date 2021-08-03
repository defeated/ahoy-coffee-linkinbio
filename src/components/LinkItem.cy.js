import { mount } from '@cypress/vue'
import LinkItem from '@/components/LinkItem.vue'

describe('LinkItem', () => {
  it('renders the link', () => {
    const link = {
      title: "Link Title",
      url: "http://example.com/path",
      icon: "FooIcon"
    }

    mount(LinkItem, { propsData: { link }})

    cy.get('li a').contains("Link Title")
      .and("have.attr", "data-icon", "FooIcon")
      .and("have.attr", "href", "http://example.com/path")
  })
})
