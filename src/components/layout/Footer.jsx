import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="main-footer">
      <strong className="text-sky-800">
        Copyright &copy; 2023 <Link to="/">Lab2YouApp</Link> .{' '}
      </strong>
      All rights reserved.
      <div className="float-right d-none d-sm-inline-block">
        <b>Version</b> 1.0.0
      </div>
    </footer>
  );
};
