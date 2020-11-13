import '@/assets/styles/css/tailwind.css';
import {ThemeProvider} from "@material-ui/styles";
import theme from '@/utils/themeMaterial'

import Layout from "@/components/Layout/Layout";
import "@/assets/styles/scss/global.scss";
import appStyles from "@/assets/styles/jsx/app";

import {DefaultSEO} from '@/components/common/SEO.js';


function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <DefaultSEO />
        <Component {...pageProps} key={router.route} />
        <style jsx global>
          {appStyles}
        </style>
      </Layout>
    </ThemeProvider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
