import { Page, Locator, expect } from '@playwright/test';
import { testData } from '../utils/test-data';
import { Helpers } from '../utils/helpers';

export class TodoPage {
  readonly page: Page;
  readonly todoInput: Locator;
  readonly todoItems: Locator;

  constructor(page: Page) {
    this.page = page;
    this.todoInput = page.getByPlaceholder('What needs to be done?');
    this.todoItems = page.locator('.todo-list li');
  }

  async goto() {
    await Helpers.navigate(this.page, testData.urls.todoMvc);
  }

  async addTodo(itemName: string) {
    await this.todoInput.fill(itemName);
    await this.todoInput.press('Enter');
  }

  getTodoByText(itemName: string): Locator {
    return this.todoItems.filter({ hasText: itemName });
  }

  async verifyTodoVisible(itemName: string) {
    await expect(this.getTodoByText(itemName)).toBeVisible();
  }

  async completeFirstTodo() {
    const firstCheckbox = this.todoItems.first().getByRole('checkbox');
    await firstCheckbox.check();
    await expect(firstCheckbox).toBeChecked();
  }

  async deleteTodo(itemName: string) {
    const todoRow = this.getTodoByText(itemName);
    await todoRow.hover();
    await todoRow.locator('.destroy').click();
  }

  async verifyTodoDeleted(itemName: string) {
    await expect(this.getTodoByText(itemName)).toHaveCount(0);
  }
}