import SupabaseProvider from '../supabase-provider';
import { PropsWithChildren } from 'react';

export default function DashboardLayout({
  children
}: PropsWithChildren) {
  return (
    <SupabaseProvider>
      {children}
    </SupabaseProvider>
  );
} 