export {};

// export type Roles = 'admin' | 'moderator' | 'user';
export type OrganizationCustomRoleKey = 'org:admin' | 'org:moderator' | 'org:member';

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
    orgRole?: OrganizationCustomRoleKey;
  }
}
