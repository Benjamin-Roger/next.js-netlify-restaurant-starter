import Image from "next/image";

const MenuItem = ({ thumbnail, title, price }) => (
  <>
    <div className="bg-white p-5 shadow flex rounded-lg">
      <figure className="h-48 w-48 relative">
        <Image
          src={thumbnail}
          layout="fill"
          className="object-cover rounded-lg"
          sizes="200px"
        />
      </figure>
      <div className="px-6">
        <h3 className="mb-4">{title}</h3>
        <span className="rounded-full bg-primary text-white py-2 px-4">
          {price} $
        </span>
      </div>
    </div>
  </>
);

export const Menu = ({ foodList, currentCategory }) => (
  <div className="grid grid-cols-1 md:grid-cols-2">
    {foodList
      .filter((food) => food.attributes.category === currentCategory)
      .map((food, key) => (
        <div key={`food-${key}`} className="p-3">
          <MenuItem {...food.attributes} />
        </div>
      ))}
  </div>
);
