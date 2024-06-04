import { describe, expect, it } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import CatImages from "../components/CatImages.vue";

describe('CatImages', () => {
  it('should be mounted', async () => {
    const wrapper = await mountSuspended(CatImages)
    expect(wrapper).toBeTruthy()
  });

  it('should be have three images in document', async () => {
    const wrapper = await mountSuspended(CatImages)
    const images = wrapper.findAll('img')
    expect(images.length).toBe(3)
  });

  it('should be images have src in public/images', async () => {
    const wrapper = await mountSuspended(CatImages)
    const images = wrapper.findAll('img')
    images.forEach((image) => {
      expect(image.attributes('src')).toContain('/public/images/')
    })
  });

  it('should be images have alt attribute', async () => {
    const wrapper = await mountSuspended(CatImages)
    const images = wrapper.findAll('img')
    images.forEach((image) => {
      expect(image.attributes('alt')).toBeTruthy()
    })
  });
})