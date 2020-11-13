import Hero from "@/components/common/Hero";
const { colors } = require("@/utils/colorScheme.js");
import config from "config";

import { Button } from "@material-ui/core";

const ContactSection = () => {
  const cards = [
    {
      title: "Hotline",
      value: config.phone,
      body: `Contact us at ${config.phone} to book a table`,
      href: `tel:${config.phone}`,
    },
    {
      title: "Facebook",
      value: config.facebook.name,
      body: "Contact us on our Facebook page",
      href: config.facebook.url,
    },
    {
      title: "Address",
      value: config.address,
      body: "Come to our restaurant",
      href: config.googleMaps,
    },
  ];
  return (
    <section>
      <div className="w-full">
        <Hero backgroundImage="/static/steak.jpg" sizes="800px" quality="50" dark>
          <p className="cursive text-2xl text-primary mt-4">Let's get in touch</p>
          <h2 className="text-4xl text-white">Our restaurant</h2>
          <div className="flex justify-center flex-wrap">
            {cards.map((card) => (
              <div key={card.title} className="card p-2 px-10 flex-1 h-inherit">
                <div className="bg-white rounded shadow h-full p-12">
                  <h3 className="text-primary">{card.title}</h3>
                  <p>{card.body}</p>
                  <a href={card.href}>
                    <Button color="primary">Let's go</Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Hero>
      </div>
    </section>
  );
};



export default ContactSection;