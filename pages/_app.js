import "styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import TopComponent from "components/Top";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <TopComponent />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
