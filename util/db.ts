import { Receipt } from "./GlobalTypes";
import { supabase } from "./InitSupabase";

const getUserReceipts = async (userId: string) => {
  const { error, data } = await supabase
    .from<Receipt>("receipt")
    .select("*")
    .eq("user", userId);
  if (error) {
    return { error: error.message };
  }

  if (data) {
    return { data };
  }
};

const getReceipt = async (receiptId: string) => {
  const { error, data } = await supabase
    .from<Receipt>("receipt")
    .select("*")
    .eq("id", receiptId);
  if (error) {
    return { error: error.message };
  }
  if (data) {
    if (data.length === 0) {
      return { error: "Receipt not found" };
    }
    return { data };
  }
};

export { getUserReceipts, getReceipt };
