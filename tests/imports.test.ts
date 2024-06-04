import { describe, expect, it } from "vitest";

describe('import vue components', () => {
  it('should be normal imports as expected', async () => {
    const loader = await import('../components/Loader.vue')
    const header = await import('../components/Header.vue')
    const catImages = await import('../components/CatImages.vue')
    const button = await import('../components/Button.vue')

    expect(loader).toBeDefined()
    expect(header).toBeDefined()
    expect(catImages).toBeDefined()
    expect(button).toBeDefined()
  });
})