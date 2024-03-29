import '@/styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faSomeIcon } from "@fortawesome/free-solid-svg-icons";

config.autoAddCss = false;


export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
