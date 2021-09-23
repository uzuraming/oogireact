import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Container } from 'react-bootstrap'
import Header from '../components/header'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header></Header>
      <Container className="mt-3">
          <Component {...pageProps} />
      </Container>

    </div>

  )
}
export default MyApp
