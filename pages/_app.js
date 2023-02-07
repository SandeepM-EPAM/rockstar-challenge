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
      <ApolloProvider client={apolloClient}>
        <App>
          <Component {...pageProps} />
        </App>
      </ApolloProvider>
    </>
    
  )
}