import { useValidatedBody, z } from 'h3-zod';

export default eventHandler(async event => {
  const { title, description, habitView } = await useValidatedBody(event, {
    title: z.string().trim().min(1, 'Title is required').max(200),
    description: z.string().trim().min(1, 'Description is required').max(5000),
    habitView: z.boolean(),
  });

  const { user } = await requireUserSession(event);

  const habit = await useDB()
    .insert(tables.habits)
    .values({
      userId: user.id,
      title,
      description,
      createdAt: new Date(),
      habitView,
    })
    .returning()
    .get();

  return habit;
});
