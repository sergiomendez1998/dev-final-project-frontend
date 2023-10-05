import PropTypes from 'prop-types';
import { Sidebar } from './Sidebar';
import { Footer } from '../components/layout/Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="h-screen flex-1 overflow-auto px-4 py-5 scrollbar-thin  scrollbar-track-white md:static" id='scroll'>
        <main className="mt-6 min-h-[93%] md:mt-0 md:min-h-[95%]">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
