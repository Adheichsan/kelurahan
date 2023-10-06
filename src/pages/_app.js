import Layout from '@/components/Layout'
import '@/styles/globals.css'
import '@/styles/responsive.css'
import 'font-awesome/css/font-awesome.min.css';


export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
