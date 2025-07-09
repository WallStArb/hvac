import { SupabaseClient } from '@supabase/supabase-js';
import { cache } from 'react';

export const getUser = cache(async (supabase: SupabaseClient<any, any, any>) => {
  const {
    data: { user }
  } = await supabase.auth.getUser();
  return user;
});

export const getUserDetails = cache(async (supabase: SupabaseClient<any, any, any>) => {
  const { data: userDetails } = await supabase
    .from('users')
    .select('*')
    .single();
  return userDetails;
});
