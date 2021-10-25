import { useState } from "react";
import { useAuth } from "../util/Auth";
// import SignUp from './signup';
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signUp, signOut, signIn, user } = useAuth();

  return (
    <>
      <form>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        {user ? user?.email : "nope"}
      </form>
      <button
        onClick={() => {
          signIn(email);
        }}
      >
        Sign Up
      </button>
      <button onClick={signOut}>Sign Out</button>
    </>
  );
};

export default SignUp;
