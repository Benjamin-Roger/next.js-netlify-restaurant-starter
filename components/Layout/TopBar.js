const { colors } = require("@/utils/colorScheme.js");

const TopBar = ({ phone, email, facebook }) => (
  <div className="topbarWrapper hidden md:block">
    <div className="topbar container h-full flex items-center justify-around py-4">
      <p className="text-sm">Hotline: {phone}</p>
      <p className="text-sm">Email: {email}</p>
      <p className="text-sm">Facebook: {facebook.name}</p>
    </div>
    <style jsx>{`
      .topbarWrapper {
        background: ${colors.background.dark};
      }
      p {
        flex: 1;
        text-align: center;
        color: ${colors.text.light};
        padding: 0 5px;
      }
      p:not(:first-of-type) {
        border-left: 1px solid ${colors.text.light};
      }
    `}</style>
  </div>
);

export default TopBar;
