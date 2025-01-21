export {};

// export type Roles = 'admin' | 'moderator' | 'user';
export type OrganizationCustomRoleKey = 'org:admin' | 'org:moderator' | 'org:member';

declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      role?: OrganizationCustomRoleKey;
      onboardingComplete?: boolean;
      userId?: string;
    };
    orgRole?: OrganizationCustomRoleKey;
  }
}
