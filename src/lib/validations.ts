import { z } from 'zod';

export const onboardingActionValidation = z.object({
  userId: z.string(),
  completeOnboarding: z.boolean().optional(),
});
