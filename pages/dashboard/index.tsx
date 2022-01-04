import ReceiptButton from "../../components/ReceiptButton";

import { useEffect, useState } from "react";
import { getUserReceipts } from "../../util/db";
import { useAuth } from "./../../util/Auth";
import ReceiptCard from "./../../components/ReceiptCard";
import { Receipt } from "../../util/GlobalTypes";
import { supabase } from "../../util/InitSupabase";
import styled from "styled-components";

const Dashboard = () => {
  const { user } = useAuth();
  const [receipts, setReceipts] = useState<Receipt[]>([]);
  const [completedReceipts, setCompletedReceipts] = useState<Receipt[]>([]);

  useEffect(() => {
    const getReceipts = async () => {
      if (user) {
        const receiptList = await getUserReceipts(user.id);
        if (receiptList != null && receiptList.data) {
          setReceipts(receiptList.data);
        }
      }
    };

    getReceipts();
  }, [user]);

  if (!user) {
    return <div>You are not logged in</div>;
  }

  return (
    <>
      Dashboard
      <ReceiptButton />
      <ReceiptViewer>
        {receipts.map((receipt: any) => {
          return <ReceiptCard key={receipt.id} ReceiptInfo={receipt} />;
        })}
      </ReceiptViewer>
    </>
  );
};

const ReceiptViewer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
export default Dashboard;
