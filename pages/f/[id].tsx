import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getReceipt } from "../../util/db";
import { Receipt } from "../../util/GlobalTypes";
import useSWR from "swr";
import fetcher from "../../util/fether";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const [receipt, setReceipt] = useState<Receipt[] | null>(null);

  const { data, error } = useSWR<Receipt[]>(
    id ? `/api/receipts/${id}` : null,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  if (data[0].type === "LINK") {
    return (
      <div>
        This is a link <a href={data[0].url}>click here to view it</a>{" "}
      </div>
    );
  }
  if (data) {
    return (
      <div>
        <h1>{data[0].name}</h1>
      </div>
    );
  }
};

export default Post;
