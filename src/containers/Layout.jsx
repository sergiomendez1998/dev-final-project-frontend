import PropTypes from 'prop-types';
import { Sidebar } from './Sidebar';
import { Footer } from '../components/layout/Footer';

export const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="relative right-7 z-[3] h-screen flex-1 overflow-auto px-4 py-5 scrollbar-thin  scrollbar-track-purple-600 md:static">
        <main className="min-h-[95%]">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
