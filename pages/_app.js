import '../styles/globals.scss'
import {Layout} from "../components/Layout";

const MyApp = ({ Component, pageProps }) => {
  return <Layout>
    <main>
      <Component {...pageProps} />
    </main>
  </Layout>
}

export default MyApp
