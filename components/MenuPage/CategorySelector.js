const { colors } = require("@/utils/colorScheme.js");

export const CategorySelector = (props) => {
  return (
    <>
      <div className="container">
        <div className="relative flex">
          <div className="darkOverlay rounded-t-lg"></div>
          {props.uniqueCategories.map((cat) => (
            <button
              key={"button-" + cat}
              className={`border-b-4 border-primary text-2xl font-bold block w-1/2 z-10 py-5 hover:text-primary duration-150 ${
                props.category === cat ? "text-primary" : "text-white"
              }`}
              onClick={(e) => props.handleClick(e.target.value)}
              value={cat}
            >
              {cat}
            </button>
          ))}
          <div className="w-full h-0 absolute bottom-0">
            <div className="arrow duration-200"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .arrow {
          content: "";
          width: 0;
          height: 0;
          color: ${colors.primary.main};
          border-width: 9px 10px 0;
          border-color: ${colors.primary.main} transparent transparent;
          position: absolute;
          left: calc(
            ${(props.uniqueCategories.indexOf(props.category) /
                props.uniqueCategories.length +
                1 / 2 / props.uniqueCategories.length) *
              100}% - 10px
          );
        }
      `}</style>
    </>
  );
};
