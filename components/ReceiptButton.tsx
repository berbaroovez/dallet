import { Dialog, DialogOverlay, DialogContent } from "@reach/dialog";
import VisuallyHidden from "@reach/visually-hidden";
import "@reach/dialog/styles.css";
import { FormEvent, useState } from "react";
import { supabase } from "../util/InitSupabase";
import { useAuth } from "../util/Auth";
import styled from "styled-components";
import MainForm from "./AddReceiptForm/MainForm";
export default function ReceiptButton() {
  const [showDialog, setShowDialog] = useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);
  const [name, setName] = useState("");
  const [notes, setNotes] = useState("");
  const [courseURL, setCourseURL] = useState("");
  const [price, setPrice] = useState("");

  const { user } = useAuth();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const insertInfo = await supabase.from("receipt").insert([
      {
        name,
        notes,
        url: courseURL,
        price: +price,
      },
    ]);
  };

  return (
    <div>
      <button onClick={open}>Create Walkathon</button>

      <Dialog
        isOpen={showDialog}
        onDismiss={close}
        aria-label="Input fields for a recipt"
      >
        <button className="close-button" onClick={close}>
          <VisuallyHidden>Close</VisuallyHidden>
          <span aria-hidden>X</span>
        </button>

        <MainForm />
        {/* <ReceiptForm onSubmit={handleSubmit}>
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
          <label htmlFor="url">URL</label>
          <input
            type="text"
            id="url"
            onChange={(e) => {
              setCourseURL(e.target.value);
            }}
            value={courseURL}
          />
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
        </ReceiptForm> */}
      </Dialog>
    </div>
  );
}

const ReceiptForm = styled.form`
  display: grid;
`;
