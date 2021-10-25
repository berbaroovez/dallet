import { FormEvent, useRef, useState } from "react";
import styled from "styled-components";
import { useAuth } from "../../util/Auth";
import { supabase } from "../../util/InitSupabase";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";

const MainForm = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [notes, setNotes] = useState("");
  const [url, setUrl] = useState("");
  const [file, setFile] = useState("File");
  const [step, setStep] = useState(1);
  const fileRef = useRef<HTMLInputElement>(null);
  const [isLink, setIsLink] = useState(true);

  const { user } = useAuth();

  // const [isURL, setIsURL] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isLink) {
      console.log("isLink");
      const insertInfo = await supabase.from("receipt").insert([
        {
          name,
          notes,
          url,
          price: +price,
          type: "LINK",
        },
      ]);

      console.log(insertInfo.error);
    } else {
      console.log("isFile");
      let file: File | undefined = undefined;
      if (fileRef.current) {
        if (fileRef.current.files) {
          file = fileRef!.current!.files![0];
        }
      }

      if (file) {
        const fileExt = file.name.split(".").pop();
        const fileName = `${user?.id}${Math.random()}.${fileExt}`;
        const filePath = `${fileName}`;

        console.log(filePath);
        console.log(fileName);
        // const file = file1Ref!.current!.files![0];
        const { data, error } = await supabase.storage
          .from("files")
          .upload(filePath, file);
        console.log(`data`, data);
        console.log("Error,", error);

        if (!error) {
          const insertInfo = await supabase.from("receipt").insert([
            {
              file_extension: fileExt,
              name,
              notes,
              filePath,
              price: +price,
              type: "FILE",
            },
          ]);

          console.log(insertInfo.error);
        }
      }
    } //end of else
  };

  return (
    <FormZone onSubmit={handleSubmit}>
      <p>Step: {step}</p>
      <p>isLink: {isLink ? "True" : "False"}</p>
      {step === 1 && <PageOne setIsLink={setIsLink} setStep={setStep} />}
      {step === 2 && (
        <PageTwo
          setName={setName}
          setPrice={setPrice}
          setNotes={setNotes}
          setUrl={setUrl}
          setStep={setStep}
          isLink={isLink}
          name={name}
          price={price}
          notes={notes}
          url={url}
          fileRef={fileRef}
        />
      )}
    </FormZone>
  );
};

const FormZone = styled.form`
  display: grid;
`;
export default MainForm;
