import { NextSeo, DefaultSeo } from "next-seo";
import config from "config";

import { useRouter } from "next/router";

export const SEO = ({ title, description }) => {
  const { asPath } = useRouter();

  return (
    <>
      <NextSeo
        title={title + " | " + config.name}
        description={description}
        canonical={config.website + asPath}
        openGraph={{
          url: config.website,
          title: title,
          description: description,
        }}
      />
    </>
  );
};

export const DefaultSEO = () => {
    const { asPath, locale } = useRouter();
  
    return (
      <>
        <DefaultSeo
          title={config.name}
          description={config.defaultSite}
          canonical={config.website + asPath}
          openGraph={{
            type: "website",
            url: config.website,
            title: config.name,
            description: config.defaultSiteDescription,
            images: [
              {
                url: config.website+config.logo,
                width: 800,
                height: 600,
                alt: config.name,
              },
            ],
            site_name: config.name,
          }}
        />
      </>
    );
  };
  