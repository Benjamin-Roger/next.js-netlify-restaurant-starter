import Link from "next/link";
import Image from "next/image";

const { colors } = require("@/utils/colorScheme.js");

import IconButton from "@material-ui/core/IconButton";
import { Zoom, Slide } from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";

const MobileMenu = ({ pathname, navLinks }) => {
  const [open, toggleMenu] = React.useState(false);

  const openMenu = () => {
    toggleMenu(!open);
  };

  return (
    <>
      {/* Mobile menu */}

      <span className="md:hidden iconButton">
        <Zoom
          in={open}
          style={{
            display: open ? "block" : "none",
          }}
        >
          <IconButton color="primary" onClick={() => openMenu()}>
            <MenuOpenIcon />
          </IconButton>
        </Zoom>
        <Zoom
          in={!open}
          style={{
            display: !open ? "block" : "none",
          }}
        >
          <IconButton color="primary" onClick={() => openMenu()}>
            <MenuIcon />
          </IconButton>
        </Zoom>
      </span>

      <Slide direction="right" in={open}>
        <nav className="md:hidden bg-white flex flex-wrap shadow absolute w-full items-center py-4 top-0 left-0 h-100">
          {navLinks.map((link, key) => (
            <Link key={`nav-${key}`} href={link.href}>
              <a
                className={`text-xl text-txt-regular font-bold px-8 w-full py-4 ${
                  link.href === pathname ? "active" : ""
                }`}
                onClick={() => openMenu()}
              >
                {link.name}
              </a>
            </Link>
          ))}
        </nav>
      </Slide>
      <style jsx>{`
        nav {
          z-index: 900;
        }

        .iconButton {
          z-index: 999;
          top: 10px;
          right: 10px;
        }
      `}</style>
    </>
  );
};

const NavBar = ({ pathname, navLinks, logo }) => {
  return (
    <div className="navWrapper bg-white">
      <div className="container flex items-center justify-between h-full">
        <div className="imgWrapper relative py-3">
          <Link href="/">
            <a>
              <Image
                src={logo}
                layout="responsive"
                height={119}
                width={200}
                sizes="200px"
              />
            </a>
          </Link>
        </div>
        <nav className="hidden md:block">
          {navLinks.map((link, key) => (
            <Link key={`nav-${key}`} href={link.href}>
              <a
                className={`text-lg text-txt-regular font-bold mx-8 ${
                  link.href === pathname ? "active" : ""
                }`}
              >
                {link.name}
              </a>
            </Link>
          ))}
        </nav>

        <MobileMenu {...{ pathname, navLinks }} />
      </div>
      <style jsx>{`
        .navWrapper {
          box-shadow: 0px 5px 5px ${colors.global.shadow};
        }

        .imgWrapper {
          maxheight: 100%;
          width: 100px;
        }
        .navWrapper :global(nav a.active) {
          color: ${colors.primary.main};
        }

        .navWrapper :global(nav a:hover) {
          color: ${colors.primary.dark};
        }
      `}</style>
    </div>
  );
};
export default NavBar;
