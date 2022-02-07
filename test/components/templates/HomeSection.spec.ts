import { mount, Wrapper } from '@vue/test-utils'
import Vue from 'vue'
import HomeSection from '~/components/templates/HomeSection.vue'

const matches = {
  title: 'Bleiny',
  subtitle: 'Elevate your horror experience...',
}

describe('HomeSection', () => {
  let wrapper: Wrapper<Vue, Element>

  beforeEach(() => {
    wrapper = mount(HomeSection)
  })

  it('shold be Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it('should contain the section title', () => {
    expect(wrapper.html()).toContain(matches.title)
  })

  it('should contain the section subtitle', () => {
    expect(wrapper.html()).toContain(matches.subtitle)
  })
})
