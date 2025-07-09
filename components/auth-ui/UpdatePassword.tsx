'use client';

import { Button } from '@/components/ui/button';
import { updatePassword } from '@/utils/auth-helpers/server';
import { handleRequest } from '@/utils/auth-helpers/client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { Input } from '../ui/input';

interface UpdatePasswordProps {
  redirectMethod: string;
}

export default function UpdatePassword({
  redirectMethod
}: UpdatePasswordProps) {
  const router = useRouter(); // Always call the hook
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true); // Disable the button while the request is being handled
    // Only use router if redirectMethod is 'client'
    const routerToUse = redirectMethod === 'client' ? router : null;
    await handleRequest(e, updatePassword, routerToUse);
    setIsSubmitting(false);
  };

  return (
    <div className="mb-6">
      <p className="mb-4 text-foreground">
        Your password needs to be updated to continue using your account.
      </p>
      <form
        noValidate={true}
        className="mb-4"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="grid gap-2">
          <div className="grid gap-1">
            <label className="text-foreground" htmlFor="password">
              New Password
            </label>
            <Input
              id="password"
              placeholder="Enter your new password"
              type="password"
              name="password"
              required
              className="mb-2"
            />
          </div>
          <div className="grid gap-1">
            <label className="text-foreground" htmlFor="passwordConfirm">
              Confirm New Password
            </label>
            <Input
              id="passwordConfirm"
              placeholder="Confirm your new password"
              type="password"
              name="passwordConfirm"
              required
              className="mb-2"
            />
          </div>
          <div className="grid gap-1">
            <label className="text-foreground" htmlFor="old-password">
              Current Password
            </label>
            <Input
              id="old-password"
              placeholder="Enter your current password"
              type="password"
              name="old-password"
              required
              className="mb-2"
            />
          </div>
          <p className="text-xs text-muted-foreground">
            Your new password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character to ensure your account&apos;s security.
          </p>
          <Button
            type="submit"
            className="mt-2"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Updating...' : 'Update Password'}
          </Button>
        </div>
      </form>
    </div>
  );
}
