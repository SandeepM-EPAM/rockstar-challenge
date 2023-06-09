import { ApolloProvider } from '@apollo/client'
import { useApollo } from '~/lib/apollo-client'
import App from '~/components/App'
import 'reset-css'
import '~/styles/global.css'
//import { createInstance } from "@adobe/alloy";

// // const alloy = createInstance({ name: "alloy" });
// // alloy("config", { ... });
// // alloy("sendEvent", { ... });

export default function NextApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <>
      <script src="https://assets.adobedtm.com/4ef014d90ea4/8f46d152dc3b/launch-534dbc3f5ac1-development.min.js" async></script>
      <script src="../public/jscripts/at.js" />
      <ApolloProvider client={apolloClient}>
        <App>
          <Component {...pageProps} />
        </App>
      </ApolloProvider>
    </>
    
  )
}