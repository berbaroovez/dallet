import styled from "styled-components";
import { Receipt } from "../util/GlobalTypes";

interface ReceiptCardProps {
  ReceiptInfo: Receipt;
}

const ReceiptCard = ({ ReceiptInfo }: ReceiptCardProps) => {
  return (
    <ReceiptZone>
      <img src="https://css-for-js.dev/favicon-32x32.png?v=64a534cfab75003bd1ac5d707ed57a03" />
      <ReceiptInformation>
        <h3>{ReceiptInfo.name}</h3>
        <p>{ReceiptInfo.notes}</p>
        <a href={`f/${ReceiptInfo.id}`}>
          {ReceiptInfo.file_extension === "pdf" ||
          "mov" ||
          "mp4" ||
          "mp3" ||
          "png" ||
          "jpg" ||
          "svg"
            ? "View"
            : ReceiptInfo.file_extension === "otf" || "ttf" || "woff" || "woff2"
            ? "Download"
            : "Visit"}
        </a>
      </ReceiptInformation>
    </ReceiptZone>
  );
};

const ReceiptZone = styled.div`
  width: 320px;
  height: 250px;
  position: relative;

  /* background: rgba(218, 254, 252, 0.15);
  backdrop-filter: blur(4px); */
  /* Note: backdrop-filter has minimal browser support */

  border: 4px solid #000000;
  box-shadow: -4px 6px 5px 1px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  img {
    position: absolute;
    top: 20px;
    left: 10px;
  }
`;

const ReceiptInformation = styled.div`
  position: relative;
  width: 220px;
  margin: auto;
  padding-top: 15px;

  h3 {
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 47px;
  }

  p {
    height: 150px;
    font-weight: 300;
    font-size: 20px;
    line-height: 35px;
  }

  a {
    position: absolute;
    bottom: 20px;
    right: 0px;
    text-decoration: none;
    background-color: #00bcd4;
    font-size: 1.2rem;
    color: black;
    padding: 5px 20px;
    border-radius: 4px;
  }
`;
export default ReceiptCard;
