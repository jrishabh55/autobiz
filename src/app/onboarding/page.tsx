'use client';

import { OrganizationSwitcher } from '@clerk/nextjs';
import { zodResolver } from '@hookform/resolvers/zod';
import { useHookFormAction } from '@next-safe-action/adapter-react-hook-form/hooks';
import { useState } from 'react';
import { FormProvider } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { FormMessage } from '@/components/ui/form';
import { Label } from '@/components/ui/label';

import { onboardingAction } from '@/lib/actions/auth';
import { onboardingActionValidation } from '@/lib/validations';

export default function OnboardingComponent() {
  const { form, handleSubmitWithAction } = useHookFormAction(
    onboardingAction,
    zodResolver(onboardingActionValidation),
    {
      actionProps: {},
      formProps: {},
      errorMapProps: {},
    }
  );
  const [error] = useState('');

  return (
    <div className="flex w-full items-center justify-center p-4">
      <div className="w-full max-w-xl rounded-xl border bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-center text-3xl font-bold text-gray-900">Welcome to AutoBiz</h1>
        <p className="mb-8 text-center text-gray-600">Please complete your organization setup to continue</p>
        <FormProvider {...form}>
          <form className="space-y-6" onSubmit={handleSubmitWithAction}>
            <section>
              <h1>Welcome to the Organization Selection page.</h1>
              <Label className="text-xs text-gray-600">
                This part of the application requires the user to select an organization in order to proceed. If you are
                not part of an organization, you can accept an invitation or create your own organization.
              </Label>
              <div className="mt-4 rounded-lg border border-input">
                <OrganizationSwitcher afterSelectOrganizationUrl="/" />
              </div>
            </section>
            {error && <FormMessage className="text-center text-red-600">Error: {error}</FormMessage>}
            <Button className="mt-6 h-11 w-full text-base" type="submit">
              Complete Setup
            </Button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
