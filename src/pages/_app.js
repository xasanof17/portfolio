import "../styles/globals.css";
import Layout from "../layouts";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider attribute="class">
        <div className="App">
          <Layout>
            <main className="main">
              <Component {...pageProps} />
            </main>
          </Layout>
        </div>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
