import GlobalStyles from "../util/GlobalStyles";
import { AuthProvider } from "../util/Auth";
// import NavBar
import Nav from "../components/Nav";
import { IdProvider } from "@radix-ui/react-id";
export default function App({ Component, pageProps }) {
  return (
    <IdProvider>
      <AuthProvider>
        <GlobalStyles />
        <Nav />
        <Component {...pageProps} />
      </AuthProvider>
    </IdProvider>
  );
}
