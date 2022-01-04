import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getReceipt } from "../../util/db";
import { Receipt } from "../../util/GlobalTypes";
import useSWR from "swr";
import fetcher from "../../util/fether";
import { supabase } from "../../util/InitSupabase";
import styled from "styled-components";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const [receipt, setReceipt] = useState<Receipt | null>(null);
  const [fileBlob, setFileBlob] = useState<string | null>(null);

  useEffect(() => {
    const getReceiptInfo = async () => {
      if (typeof id === "string") {
        const info = await getReceipt(id);

        if (info?.data) {
          setReceipt(info.data);
        }
      }
    };
    getReceiptInfo();
  }, [id]);

  useEffect(() => {
    if (receipt) {
      const getFileBlob = async () => {
        console.log("getFileBlob");
        const { data, error } = await supabase.storage
          .from("files")
          .download(receipt.filePath!);

        // const { signedURL, error } = await supabase.storage
        //   .from("files")
        //   .createSignedUrl(receipt.filePath!, 6000);
        // console.log("erro", error);
        // console.log("signed url", signedURL);
        if (data) {
          setFileBlob(URL.createObjectURL(data));
          // setFileBlob(data);
        } else {
          setFileBlob(null);
        }
      };
      getFileBlob();
    }
  }, [receipt]);

  const checkTest = () => {
    console.log(receipt?.file_extension === "png");
    console.log(receipt?.file_extension === "jpg");
    console.log(receipt?.file_extension === "jpeg");
    console.log(receipt?.file_extension === "svg");
  };

  // if (error) return <div>failed to load</div>;
  if (!receipt) return <div>loading...</div>;
  if (receipt.type === "LINK") {
    return (
      <div>
        This is a link <a href={receipt.url}>click here to view it</a>{" "}
      </div>
    );
  }

  if (receipt) {
    if (fileBlob) {
      if (
        receipt.file_extension === "png" ||
        receipt.file_extension === "jpg" ||
        receipt.file_extension === "jpeg"
      ) {
        return (
          <div>
            <img src={fileBlob} />
          </div>
        );
      } else if (receipt.file_extension === "pdf") {
        return (
          <div>
            <PDFDisplay src={fileBlob} />
          </div>
        );
      } else if (
        receipt.file_extension === "mov" ||
        receipt.file_extension === "mp4"
      ) {
        return (
          <div>
            <VideoPlayer src={fileBlob} controls />
          </div>
        );
      } else {
        return (
          <p>
            We currently dont know how to display that format contact Carter to
            fix :)
          </p>
        );
      }
    }

    return <div>loading...</div>;
  }
};

export default Post;

const VideoPlayer = styled.video`
  max-width: 80%;
`;

const PDFDisplay = styled.embed`
  width: 100%;
  height: 100vh;
`;
