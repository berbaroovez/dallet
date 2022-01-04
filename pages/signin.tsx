import router from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useAuth } from "../util/Auth";
// import SignUp from './signup';
const SignUp = () => {
  const [email, setEmail] = useState("");

  const { signOut, signIn, user } = useAuth();
  useEffect(() => {
    if (user?.email) {
      router.push("/dashboard");
    }
  }, [user]);
  return (
    <FormZone>
      <h1>sign in</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          signIn(email);
        }}
      >
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <button type="submit">Sign Up</button>
      </form>
    </FormZone>
  );
};

const FormZone = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: 20px;
  margin: -30px;

  h1 {
    font-weight: 300;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    input {
      background-color: #fffef2;
      border-radius: 5px;
    }
    button {
      width: 100%;
      background-color: #fffef2;
      border-radius: 5px;
      border: 1px black solid;
      cursor: pointer;
    }
  }
`;
export default SignUp;
