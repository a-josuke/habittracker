import { eq, and } from 'drizzle-orm';
import { useValidatedParams, useValidatedBody, z, zh } from 'h3-zod';

export default eventHandler(async event => {
  const { id } = await useValidatedParams(event, {
    id: zh.intAsString,
  });

  const { title, description, completeDays, habitView } = await useValidatedBody(event, {
    title: z.string().trim().min(1, 'Title is required').max(200).optional(),
    description: z.string().trim().max(5000).optional(),
    completeDays: z
      .array(z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Dates must be yyyy-MM-dd'))
      .max(3700)
      .transform(days => [...new Set(days)])
      .optional(),
    habitView: z.boolean().optional(),
  });

  const { user } = await requireUserSession(event);

  const updatedFields: Partial<{ title: string; description: string; completeDays: string[]; habitView: boolean }> = {};
  if (title !== undefined) updatedFields.title = title;
  if (description !== undefined) updatedFields.description = description;
  if (completeDays !== undefined) updatedFields.completeDays = completeDays;
  if (habitView !== undefined) updatedFields.habitView = habitView;

  const habit = await useDB()
    .update(tables.habits)
    .set(updatedFields)
    .where(and(eq(tables.habits.id, id), eq(tables.habits.userId, user.id)))
    .returning()
    .get();

  if (!habit) {
    throw createError({ statusCode: 404, statusMessage: 'Habit not found' });
  }

  return habit;
});
