# Restaurant starter using Next.js and Netlify CMS

A sample Next.js project for getting a restaurant website started. Made with Netlify CMS for easy content update and TailwindCSS for styling.

See https://next-netlify-restaurant-starter-example.vercel.app/ for a live example.

## How to use

Use git to clone this repo:

```bash
git clone https://github.com/Benjamin-Roger/next-netlify-restaurant-starter.git

cd next-netlify-restaurant-starter

npm i

npm run dev

```

For local development, you will need to run a specific proxy server made by Netlify in a separate command window to use your local git repository. To start it, run
```bash
npx netlify-cms-proxy-server
or
npm run local
```
In a local environment, logging into the amdin pages does not require authentication, feel free to test it out !

Deploy it to the cloud with [Vercel](https://vercel.com/import/project?template=https://github.com/Benjamin-Roger/next-netlify-restaurant-starter.git) ([Documentation](https://nextjs.org/docs/deployment)).

Unfortunately, Netlify CMS cannot host this project as it does not manage the [Image component designed by Next])(https://nextjs.org/docs/api-reference/next/image), that allows the optimization of uploaded images.

This version uses Netlify-hosted authentication features with Git Gateway. You can follow the instructions in this Stack Overflow thread to adapt it to your own website https://stackoverflow.com/questions/52174873/using-netlifys-hosted-identity-service-with-self-hosted-netlify-cms.


## How it works

Sites take its content: 
- from config files accessible via the admin pages: general settings and SEO setting, stored in /content/data/config.json and seo.json
- from markdown files in `/content`. Three of pages (`home`, `about` and `menu`) are referencing directly their respective markdown files.

Administration is accessed via \[baseUrl\]/admin/index.html. It uses Netlify CMS to update the markdown files.

The following content can be updated in the admin pages:
- blog posts
- food items and food categories
- SEO description, both per page and site-wide for a default description
- logo

Blog component loads all posts (during build!) and lists them out.


## How to adapt
Most of the content can be updated via the administration pages.
Colors can be changed via the "colorScheme.js" file accessible in /utils folder.
Styles are mostly in styled-JSX in the components, some global styles are in the /assets/styles/scss folder.


## Credits

https://www.pexels.com for placeholder images

Icons : [Designed by Katemangostar / Freepik](http://www.freepik.com)
Hand drawn sketches : [Designed by pikisuperstar / Freepik](http://www.freepik.com)
