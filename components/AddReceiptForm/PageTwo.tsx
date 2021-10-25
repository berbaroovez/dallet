import { FormEvent, RefObject } from "react";

interface PageTwoProps {
  name: string;
  notes: string;
  url: string;
  price: string;

  isLink: boolean;
  fileRef: RefObject<HTMLInputElement>;

  setStep: (step: number) => void;
  setName: (name: string) => void;
  setNotes: (notes: string) => void;
  setUrl: (courseurl: string) => void;
  setPrice: (price: string) => void;
}

const PageTwo = ({
  name,
  notes,
  url,
  price,
  isLink,
  fileRef,
  setName,
  setNotes,
  setUrl,
  setPrice,
}: PageTwoProps) => {
  return (
    <>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      />
      <label htmlFor="notes">Notes</label>
      <input
        type="text"
        id="notes"
        onChange={(e) => {
          setNotes(e.target.value);
        }}
        value={notes}
      />
      {isLink ? (
        <>
          <label htmlFor="url">url</label>
          <input
            type="text"
            id="url"
            onChange={(e) => {
              setUrl(e.target.value);
            }}
            value={url}
          />
        </>
      ) : (
        <>
          <label htmlFor="file">
            Create the most super image of the Task Manager. Most super wins.
          </label>
          <input type="file" name="file" id="file" ref={fileRef} />
        </>
      )}

      <label htmlFor="price">price</label>
      <input
        type="number"
        id="price"
        onChange={(e) => {
          setPrice(e.target.value);
        }}
        value={price}
      />

      <button type="submit">Create Walkathon</button>
    </>
  );
};

export default PageTwo;
