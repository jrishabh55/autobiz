'use server';

import { auth, clerkClient } from '@clerk/nextjs/server';

interface OnboardingResponse {
  message?: string;
  error?: string;
}

export async function completeOnboarding(): Promise<OnboardingResponse> {
  const { userId } = await auth();
  const client = await clerkClient();

  if (!userId) {
    return { error: 'Not authenticated' };
  }

  try {
    await client.users.updateUser(userId, {
      publicMetadata: {
        onboardingComplete: true,
      },
    });

    return { message: 'Onboarding completed successfully' };
  } catch (error) {
    console.error('Error updating user:', error);
    return { error: 'Failed to complete onboarding' };
  }
}
