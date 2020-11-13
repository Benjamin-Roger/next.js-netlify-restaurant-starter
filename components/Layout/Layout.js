import { useRouter } from "next/router";
import Transition from "../common/Transition";
import config from "config";

import Footer from './Footer';
import TopBar from './TopBar';
import NavBar from './NavBar';


const Layout = ({ children }) => {
  const { pathname } = useRouter();

  return (
    <>
      <TopBar {...config} />
      <header className="sticky z-50">
        <NavBar pathname={pathname} {...config} />
      </header>

      <Transition location={pathname}>
        <main>{children}</main>
      </Transition>

      <Footer {...config} />

      <style jsx>{`
        header {
          top: 0;
        }
        main {
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </>
  );
};

export default Layout;
