import { describe, expect, it } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import Header from "../components/Header.vue";

describe('Header', () => {
  it('should be mounted', async () => {
    const wrapper = await mountSuspended(Header)
    expect(wrapper).toBeTruthy()
  });

  it('should be contains tag header', async () => {
    const wrapper = await mountSuspended(Header)
    expect(wrapper.find('header').exists()).toBe(true)
  });

  it('should be contains tag h1', async () => {
    const wrapper = await mountSuspended(Header)
    expect(wrapper.find('h1').exists()).toBe(true)
  });

  it('should be contains text', async () => {
    const wrapper = await mountSuspended(Header)
    expect(wrapper.text()).toContain('The defsafe cat facts page')
  });
})