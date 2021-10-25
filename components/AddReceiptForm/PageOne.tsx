interface PageOneProps {
  setStep: (step: number) => void;
  setIsLink: (isLink: boolean) => void;
}

const PageOne = ({ setStep, setIsLink }: PageOneProps) => {
  const onButtonClick = (type: string) => {
    if (type === "Link") {
      setIsLink(true);
    } else {
      setIsLink(false);
    }
    setStep(2);
  };

  return (
    <>
      <h3>What type of receipt are you uploading</h3>
      <input
        type="button"
        value="Link"
        name="Link"
        onClick={() => {
          onButtonClick("Link");
        }}
      />
      <input
        type="button"
        value="File"
        name="File"
        onClick={() => {
          onButtonClick("File");
        }}
      />
    </>
  );
};

export default PageOne;
