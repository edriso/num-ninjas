import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    env: {
      // Dummy URL so PrismaClient can initialize without crashing in tests.
      // Tests only call pure functions (getWeekStart, pickWeightedTopics, etc.)
      // — they never actually query the database.
      DATABASE_URL: 'mysql://test:test@localhost:3306/test',
    },
  },
});
