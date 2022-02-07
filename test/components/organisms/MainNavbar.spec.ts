import { shallowMount, Wrapper } from '@vue/test-utils'
import Vue from 'vue'
import MainNavbar from '~/components/organisms/MainNavbar.vue'

const matches = {
  title: 'Bleiny',
  items: ['News', 'Assets', 'Tokenomics', 'Team', 'Partner'],
  dropdown: {
    label: 'Docs',
    items: ['Roadmap', 'Bleiny Wiki', 'Whitepaper', 'FAQs'],
  },
  button: 'Marketplace',
}

describe('MainNavbar', () => {
  let wrapper: Wrapper<Vue, Element>

  beforeEach(() => {
    wrapper = shallowMount(MainNavbar)
  })

  it('shold be Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it('should contain the title', () => {
    expect(wrapper.html()).toContain(matches.title)
  })

  it('should contain the navbar items', () => {
    matches.items.forEach((itemText) => {
      const { wrappers } = wrapper.findAllComponents({ name: 'b-navbar-item' })
      const navbarItems = wrappers.map((childWrapper) => childWrapper.text())

      expect(navbarItems).toContain(itemText)
    })
  })

  it('should contain the navbar dropdown', () => {
    const dropdownElement = wrapper.getComponent({ name: 'b-navbar-dropdown' })

    const { wrappers } = dropdownElement.findAllComponents({
      name: 'b-navbar-item',
    })
    const dropDownItems = wrappers.map((item) => item.text())

    expect(dropdownElement.props().label).toBe(matches.dropdown.label)
    expect(dropDownItems).toMatchObject(matches.dropdown.items)
  })

  it('should contain the marketplace button', () => {
    const marketplaceButton = wrapper.getComponent({
      name: 'b-button',
    })

    expect(marketplaceButton.text()).toBe(matches.button)
  })
})
