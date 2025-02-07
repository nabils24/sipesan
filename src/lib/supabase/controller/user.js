import supabase from "@/lib/supabase/config.js";

export const getUserTest = async () => {
  const { data, error } = await supabase.from("users").select();
  if (error) {
    throw error;
  }
  return data;
};
export const createUser = async user => {
  const { data, error } = await supabase.from("users").insert([user]);
  if (error) {
    throw error;
  }
  return data;
};

export default { getUserTest, createUser };
