import { describe, expect, it } from "vitest";
import Page from "../pages/index.vue"
import { mountSuspended } from "@nuxt/test-utils/runtime";

describe('Page', () => {
  it('should be mounted', async () => {
    const wrapper = await mountSuspended(Page)
    expect(wrapper).toBeTruthy()
  });

  it('should render the title', async () => {
    const wrapper = await mountSuspended(Page)
    expect(wrapper.text()).toContain('Cat fact:')
  });

  it('should be have button component and text and icon', async () => {
    const wrapper = await mountSuspended(Page)

    expect(wrapper.findComponent({ name: 'Button' })).toBeTruthy()
    expect(wrapper.findComponent({ name: 'Button' }).text()).toContain('Get a random cat fact')
    expect(wrapper.findComponent({ name: 'Button' }).findComponent({ name: 'Icon' })).toBeTruthy()
  });

  it('should be have CatImages component', async () => {
    const wrapper = await mountSuspended(Page)

    expect(wrapper.findComponent({ name: 'CatImages' })).toBeTruthy()
  });
})