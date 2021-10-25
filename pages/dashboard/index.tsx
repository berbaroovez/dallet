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

  // useEffect(() => {
  //Once we have the receipts we need to update the URLS for the ones that are files
  //we do this by getting the filepath and getting a blob url and attaching it to the receipt
  //This allows us to click on the button on the receipt card and still have the file open
  //   const getDownloadURLS = async () => {
  //     const receiptList = [...receipts];

  //     for (let i = 0; i < receiptList.length; i++) {
  //       if (receiptList[i].type === "FILE") {
  //         //if the file is pdf/ a font we can used the signed URL method because it will download the font/allow us to view pdf
  //         if (
  //           receiptList[i].file_extension === "pdf" ||
  //           "otf" ||
  //           "ttf" ||
  //           "woff" ||
  //           "woff2"
  //         ) {
  //           const { signedURL, error } = await supabase.storage
  //             .from("files")
  //             .createSignedUrl(receiptList[i].filePath!, 6000);

  //           if (signedURL) {
  //             receiptList[i].url = signedURL;
  //           }
  //         }
  //         //this currently still just downloads the file since we dont trigger window.open when click the button on the card need to look into it further
  //         //if the file is normal media image/video we can use a different method to get a url that will actually open up vs just downloading
  //         else {
  //           const { data, error } = await supabase.storage
  //             .from("files")
  //             .download(receiptList[i].filePath!);

  //           if (error) {
  //             alert(error);
  //           }
  //           if (data) {
  //             receiptList[i].url = URL.createObjectURL(data);
  //           }
  //         } // end of else
  //       }
  //     }

  //     setCompletedReceipts(receiptList);
  //   };

  //   getDownloadURLS();
  // }, [receipts]);

  if (!user) {
    return <div>You are not logged in</div>;
  }

  const testDownload = async () => {
    // const { data, error } = await supabase.storage
    //   .from("files")
    //   .download("6c329340-4922-4e58-a41e-a852e110a6570.12550669228742017.ttf");

    const { signedURL, error } = await supabase.storage
      .from("files")
      .createSignedUrl(
        "6c329340-4922-4e58-a41e-a852e110a6570.9256589482562076.pdf",
        60
      );
    // var urlCreator = window.URL || window.webkitURL;
    // var imageUrl = urlCreator.createObjectURL(data!);

    // const file = new Blob([data!], { type: "font/otf" });
    // const file = new Blob([data!], { type: "application/pdf" });

    // const fileURL = URL.createObjectURL(data!);
    // //Open the URL on new Window
    // window.open(fileURL + ".ttf");
    // // console.log(imageUrl);
    console.log(signedURL);
    console.log(error);
  };

  return (
    <>
      Dashboard
      <button onClick={testDownload}>Download</button>
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
  display: flex;
  gap: 20px;
`;
export default Dashboard;
