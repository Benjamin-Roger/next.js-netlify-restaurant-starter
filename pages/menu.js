import Hero from "@/components/common/Hero";
import Transition from "@/components/common/Transition";
import { SEO } from "@/components/common/SEO";
import ContactSection from "@/components/common/ContactSection";
import { CategorySelector, Menu } from "@/components/MenuPage";

import importFoodItems from "@/utils/importFoodItems";

import { attributes, html } from "../content/menu.md";

const MenuPage = (props) => {
  // Get all categories from the food list
  const uniqueCategories = [
    ...new Set(props.foodList.map((food) => food.attributes.category)),
  ];

  const [category, setCategory] = React.useState(uniqueCategories[0]);

  return (
    <>
      <SEO title={attributes.title} description={attributes.description ? attributes.description : undefined } />
      <section>
        <Hero backgroundImage={attributes.heroImage}>
          <h1>{attributes.title}</h1>
          <div
            className="textWhite"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <div className="absolute bottom-0 left-0 w-full">
            <CategorySelector
              handleClick={setCategory}
              category={category}
              {...{ uniqueCategories }}
            />
          </div>
        </Hero>
      </section>

      <section className="bg-regular py-16 decorated">
        <div className="container z-10 relative">
          <Transition location={category}>
            <Menu {...props} currentCategory={category} />
          </Transition>
        </div>
      </section>

      <ContactSection />
      <style>{`
      

    `}</style>
    </>
  );
};

export async function getStaticProps() {
  const foodList = await importFoodItems();

  return {
    props: {
      foodList,
    },
  };
}

export default MenuPage;
