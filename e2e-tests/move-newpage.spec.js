import { test, expect }  from '@playwright/test'
import {describe} from "node:test";

describe('charizard', () => {
  test('open charizard page', async ({ page }) => {
    await page.goto('/pokemon/charizard')
    await expect(page.getByText('charizard')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  })
})