export {};

export type Roles = 'admin' | 'moderator' | 'user';

declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      onboardingComplete?: boolean;
      role?: Roles;
      organizationType?: string;
      organizationName?: string;
      organizationId?: string;
      userId?: string;
    };
  }
}
