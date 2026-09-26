import { eq } from 'drizzle-orm';

export default eventHandler(async event => {
  const { user } = await requireUserSession(event);

  // Run both deletes atomically so a failure can't leave a half-deleted account.
  const db = useDB();
  await db.batch([db.delete(tables.habits).where(eq(tables.habits.userId, user.id)), db.delete(tables.users).where(eq(tables.users.id, user.id))]);

  await clearUserSession(event);

  return { message: 'Account and all related habits have been successfully deleted.' };
});
