import supabase from '../utils/supabase';
import { compileUserInfo, User } from '../models/User';

export const createUser = async (name: string, email: string, dues: number | null): Promise<any> => {
  const newUser = await compileUserInfo(name, email)

  if (dues) { // fold this into compileUserInfo function at a later date. Functionality is separate.
    newUser.total_due += dues
  }
  console.log(dues)
  console.log(newUser.total_due)

  const { data, error } = await supabase
    .from('users')
    .insert([{ ...newUser }])
    .single();  // Fetch single record, since we're only adding one user

  if (error) throw new Error(error.message);

  return data;  // Return the new member
};
