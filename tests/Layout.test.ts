import { describe, expect, it } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import Layout from "../layouts/default.vue"

describe('Layout', () => {
  it('should be mounted', async () => {
    const wrapper = await mountSuspended(Layout)
    expect(wrapper).toBeTruthy()
  });

  it('should be have Header component', async () => {
    const wrapper = await mountSuspended(Layout)

    expect(wrapper.findComponent({ name: 'Header' })).toBeTruthy()
  });

  it('should be have main element', async () => {
    const wrapper = await mountSuspended(Layout)

    expect(wrapper.find('main')).toBeTruthy()
  });

  it('should be main have bg color defined in tailwindcss', async () => {
    const wrapper = await mountSuspended(Layout)

    expect(wrapper.find('main').classes()).toContain('bg-paleDogwood')
  });
})