import PropTypes from "prop-types";

const LayoutLogin = ({ children }) => {
  return (
    <main className="h-screen overflow-auto scrollbar-thin scrollbar-track-white scrollbar-thumb-sky-600">
      {children}
    </main>
  );
};

LayoutLogin.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutLogin;
