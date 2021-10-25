import styled from "styled-components";

const Title = styled.h1`
  font-size: 50px;
`;

export default function Home() {
  return (
    <>
      <Title>Rallet</Title>
      <p>A place to track your online purchases</p>
    </>
  );
}
