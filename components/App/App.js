import { useQuery } from '@apollo/client'
import React from 'react'
import styles from './App.module.css'
import APP_QUERY from './App.graphql'
import Link from 'next/link'
import NextNprogress from 'nextjs-progressbar'
import Head from 'next/head'
import { resolveImage } from '~/lib/resolve-image'
import { useState } from "react"
import { userService } from '../../services';
import "@adobe/universal-editor-cors";


export const App = ({ children }) => {
  const { data } = useQuery(APP_QUERY)

  const store = data?.storeConfig

  const categoryUrlSuffix = store?.category_url_suffix ?? ''

  const categories = data?.categoryList[0].children

  function logout() {
    userService.logout();
  }

  if (typeof window !== "undefined") {
    const userEmailId = "test@test.com";
    const userFirstName = "";
    if (localStorage.getItem("user") !== null){
       userEmailId = JSON.parse(window.localStorage.user).emailid;
       userFirstName = JSON.parse(window.localStorage.user).firstName
    }
   
    console.log("userEmailId ==== > "+ userEmailId);

    if(userEmailId!==null) { 
        window.digitalData = {
        page:{
            pageInfo:{
              pageName: "Home Page",
            }
        },
        profile: {
            identification: {
              emailid: userEmailId,
              firstName: userFirstName,
            }         
          },     
      };
    }
   
   
  }

  return (
    <React.Fragment>
      <Head>
        <title>{store?.default_title}</title>
        <meta name="urn:adobe:aue:system:aemconnection" content="aem:https://author-p24103-e71623.adobeaemcloud.com"/>
        <link href="//netdna.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet" />
        {/* <script src="https://assets.adobedtm.com/ed8972503195/54e68c4d49b2/launch-bb0879dc4b4b-development.min.js" async></script>
        <script src="https://cdn.jsdelivr.net/gh/adobe/universal-editor-cors/dist/universal-editor-embedded.js" async></script> */}
        <script src="https://assets.adobedtm.com/4ef014d90ea4/8f46d152dc3b/launch-534dbc3f5ac1-development.min.js" async></script>
      </Head>

      <div className={styles.app}>
        <NextNprogress
          startPosition={0.4}
          stopDelayMs={200}
          height={6}
          options={{ showSpinner: false, easing: 'ease' }}
        />

        <header className={styles.header}>
          <Link href="/">
            <a>
              <img
                src={
                  store?.header_logo_src
                    ? resolveImage(
                        store.base_media_url + 'logo/' + store.header_logo_src
                      )
                    : '/static/logo.png'
                }
                alt={store?.logo_alt ?? 'Store'}
              />
            </a>
          </Link>

          <nav className={styles.categoriesWrapper}>
            <ul className={styles.categories}>
              {categories?.map((category) => (
                <li key={category.id}>
                  <Link
                    href={{
                      pathname: '_url-resolver',
                      query: {
                        pathname: `/${category.url_key + categoryUrlSuffix}`,
                        type: 'CATEGORY',
                      },
                    }}
                    as={category.url_key + categoryUrlSuffix}
                  >
                    <a>{category.name}</a>
                  </Link>
                </li>
              ))}
              <li>
                {userService.userValue && 
                <a href="#" onClick={logout}>Logout</a>
                }
                {!userService.userValue && 
                <Link href="/account"><a>Login</a></Link>
                }
              </li>
              
            </ul>
            <ul>
          
            </ul>
          </nav>
        </header>

        <div className={styles.content}>{children}</div>

      </div>
    </React.Fragment>
  )

  
}

