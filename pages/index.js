import React from 'react'
import Home from '~/components/Home'
import { initializeApollo } from '~/lib/apollo-client'
import APP_QUERY from '~/components/App/App.graphql'
import PRODUCTS_QUERY from '~/components/Products/Products.graphql'
import aemHeadlessClient from '../lib/aem-headless-client'
import Hero from '../components/Hero/Hero'
import { userService } from '../services'


function Page({ rockstars }) {
  return (
    <> 
    <div>
      <div className="welcome"> <b>Welcome {userService.userValue?.firstName}!</b></div>
      <br/>

      {/* <div width="100%">
        <img
          src="https://t4.ftcdn.net/jpg/01/57/88/65/240_F_157886508_2uBRNXKudUELMZZiW17FLKi8uJtwwLsp.jpg"
          width="100%"
          // height="200"
        />
      </div> */}

    {/* Hero Component */}
    <div>{rockstars.map(
      ({
        pagecontent,
        pageContentImage,
      }, index) => {
        return (
          <Hero
            key={index}
            pageContent={pagecontent}
            pageContentImage= {pageContentImage}
          />
        );
      }
    )} <br/></div>
    <br/>
    {/* Ecommerce content */}
    <Home/>
    <br/>
    </div>  

  </>
  )
}


export async function getServerSideProps() {
  //const res = await aemHeadlessClient.getAllAdventures();
  const res = await aemHeadlessClient.getRockStarHomePage();
  //const adventures = res?.data?.adventureList?.items || [];
  const rockstars = res?.data?.rockstartHomePageModelList?.items || [];

  //getStaticProps1();

  if (!rockstars.length) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      rockstars
    }
  };
}

// export const getStaticProps1 = async () => {
//   const apolloClient = initializeApollo()

//   await apolloClient.query({
//     query: APP_QUERY,
//   })

//   await apolloClient.query({
//     query: PRODUCTS_QUERY,
//     variables: { search: '' },
//   })

//   await getServerSideProps1();

//   return {
//     props: {
//       initialApolloState: apolloClient.cache.extract(),
//     },
//     revalidate: 1,
//   }
// }



export default Page
