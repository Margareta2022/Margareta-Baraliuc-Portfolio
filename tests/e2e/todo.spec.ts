import { test } from '@playwright/test';
import { TodoPage } from '../../pages/todo-page';
import { testData } from '../../utils/test-data';

test.describe('E2E - Todo App', () => {
  test('should add and complete a todo item', async ({ page }) => {
    const todoPage = new TodoPage(page);
    const todoText = testData.todoItems.first;

    await todoPage.goto();
    await todoPage.addTodo(todoText);
    await todoPage.verifyTodoVisible(todoText);
    await todoPage.completeFirstTodo();
  });

  test('should delete a todo item', async ({ page }) => {
    const todoPage = new TodoPage(page);
    const todoText = testData.todoItems.deleteMe;

    await todoPage.goto();
    await todoPage.addTodo(todoText);
    await todoPage.verifyTodoVisible(todoText);
    await todoPage.deleteTodo(todoText);
    await todoPage.verifyTodoDeleted(todoText);
  });
});