'use client';

import {Button} from '@/components/ui/button';
import { signInWithOAuth } from '@/utils/auth-helpers/client';
import { type Provider } from '@supabase/supabase-js';
import { FcGoogle } from "react-icons/fc";
import { useState } from 'react';
import { Input } from '../ui/input';

type OAuthProviders = {
  name: Provider;
  displayName: string;
  icon: React.ReactElement;
};

export default function OauthSignIn() {
  const oAuthProviders: OAuthProviders[] = [
    {
      name: 'google',
      displayName: 'Google',
      icon: <FcGoogle className="h-5 w-5" />
    }
    /* Add desired OAuth providers here */
  ];
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true); // Disable the button while the request is being handled
    await signInWithOAuth(e);
    setIsSubmitting(false);
  };

  return (
    <div className="mt-8">
      {oAuthProviders.map((provider) => (
        <form
          key={provider.name}
          className="pb-2"
          onSubmit={(e) => handleSubmit(e)}
        >
          <Input type="hidden" name="provider" value={provider.name} />
          <Button
            variant="outline"
            type="submit"
            className="w-full text-zinc-950 py-6 dark:text-white" 
          >
            <span className="mr-2">{provider.icon}</span>
            <span>{provider.displayName}</span>
          </Button>
        </form>
      ))}
    </div>
  );
}
