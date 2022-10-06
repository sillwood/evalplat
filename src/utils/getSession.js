import { supabase } from '../services/supabaseClient';

export const getSession = async () => {
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();

  if (error) {
    console.error(error);
    return null;
  } else {
    return session;
  }
};
