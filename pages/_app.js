import GlobalStyles from "../util/GlobalStyles";
import { AuthProvider } from "../util/Auth";
// import NavBar

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <GlobalStyles />

      <Component {...pageProps} />
    </AuthProvider>
  );
}
