import Link from "next/link";
import Image from "next/image";

const Footer = ({navLinks, phone,email,facebook, address, name, openingTimes, logoFooter}) => (
  <>
    <footer className="bg-dark-gray-900 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 container">
        <div className="w-1/2 mx-auto my-5">
          <Image
            src={logoFooter}
            layout="responsive"
            height={119}
            width={200}
            sizes="200px"
            className="object-contain"
          />
        </div>
        <div className="">
          <h3 className="text-white mb-2">Menu</h3>
          <ul>
            {navLinks.map((link, key) => (
              <li className="mb-2 list-disc ml-5" key={`footer-nav-${key}`}>
                <Link href={link.href}>
                  <a className="text-gray-400">{link.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <h3 className="text-white  mb-2">Contacts</h3>
          <address>
            <p className="text-gray-400 mb-2 regular not-italic">
              Hotline: {phone}
            </p>
            <p className="text-gray-400 mb-2 regular not-italic">
              Email: {email}
            </p>
            <p className="text-gray-400 mb-2 regular not-italic">
              Facebook: {facebook.name}
            </p>
            <p className="text-gray-400 mb-2 regular not-italic">
              Address: {address}
            </p>
            <p className="text-gray-400 mb-2 regular not-italic">
              Open: {openingTimes}
            </p>
          </address>
        </div>
      </div>
    </footer>
    <div className="bg-black">
      <div className="container text-center">
        <p className="text-gray-400 py-3">
          Copyright © 2020 - {name}. All Rights Reserved.
        </p>
      </div>
    </div>
    <style jsx>{``}</style>
  </>
);

export default Footer;
