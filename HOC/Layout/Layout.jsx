import React from "react";
import PropTypes from "prop-types";
function Layout({ children }) {
  return (
    <div>
      <div className="">{children}</div>
    </div>
  );
}
Layout.proptypes = {
  children: PropTypes.any,
};
export default Layout;
