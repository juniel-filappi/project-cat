import { describe, expect, it } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import Button from "../components/Button.vue";

describe('Button', () => {
  it('should be mounted', async () => {
    const wrapper = await mountSuspended(Button)
    expect(wrapper).toBeTruthy()
  });

  it('should be have type button', async () => {
    const wrapper = await mountSuspended(Button)
    expect(wrapper.attributes('type')).toBe('button')
  });

  it('should be have emit click', async () => {
    const wrapper = await mountSuspended(Button)
    wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
  });
})