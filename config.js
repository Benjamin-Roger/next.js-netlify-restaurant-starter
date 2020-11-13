const config = require("./content/data/config.json");
const seoConfig = require("./content/data/seo.json");

const NAME = config.name;
const PHONE = config.phone;
const EMAIL = config.email;
const FACEBOOK = config.facebook;
const ADDRESS = config.address;
const OPENING_TIMES = config.openingTimes;
const GOOGLEMAPS = `https://www.google.com/maps/search/${config.address.replace(/ /g, '+')}`;
const WEBSITE = seoConfig.baseUrl;
const DEFAULT_SITE_DESCRIPTION= seoConfig.defaultSiteDescription;
const SITE_TITLE=seoConfig.siteTite;
const GET_FORM_ACTION= config.getFormAction;
const POSTS_PER_PAGE= config.postsPerPage;

const LOGO= config.logo;
const LOGO_FOOTER = config.logoFooter || config.logo;

module.exports = {
  name: NAME,
  phone: PHONE,
  email: EMAIL,
  facebook: FACEBOOK,
  address: ADDRESS,
  googleMaps: GOOGLEMAPS,
  openingTimes:OPENING_TIMES,
  website: WEBSITE,
  map:config.map,
  navLinks: [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Menu",
      href: "/menu",
    },
    {
      name: "Contact",
      href: "/contact",
    },
    {
      name: "Blog",
      href: "/blog",
    },
  ],
  postsPerPage: POSTS_PER_PAGE,
  getFormAction:GET_FORM_ACTION,
  logo:LOGO,
  logoFooter:LOGO_FOOTER,
  sitetitle:SITE_TITLE,
  defaultSiteDescription:DEFAULT_SITE_DESCRIPTION
};
