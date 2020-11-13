import ContactSection from "@/components/common/ContactSection";
import { SEO } from "@/components/common/SEO";
import ContactForm from "@/components/common/ContactForm";
import MapContainer from "@/components/common/MapContainer";

import config from "config";

const ContactPage = () => {
  return (
    <>
      {" "}
      <SEO title="Contact" />
      <section className="gMapsContainer relative">
        <MapContainer />
      </section>
      <section>
        <div className="container grid grid-cols-1 md:grid-cols-3 py-6">
          <div className="col-span-1 p-12 border bg-regular rounded-lg">
            <h1 className="mb-2 text-3xl text-navy-900">Contact</h1>
            <address>
              <p className="mb-2 regular not-italic">Hotline: {config.phone}</p>
              <p className="mb-2 regular not-italic">Email: {config.email}</p>
              <p className="mb-2 regular not-italic">
                Facebook: {config.facebook.name}
              </p>
              <p className="mb-2 regular not-italic">
                Address: {config.address}
              </p>
              <p className="mb-2 regular not-italic">
                Open: {config.openingTimes}
              </p>
            </address>
          </div>
          <div className="col-span-2 p-12">
            <ContactForm />
          </div>
        </div>
      </section>
      <section>
        <ContactSection />
      </section>
      <style>{`
      .gMapsContainer {
        height:60vh;
      }

    `}</style>
    </>
  );
};

export default ContactPage;
