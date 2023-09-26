import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="">
      <strong className="text-sky-800">
        Copyright &copy; 2023 <Link to="/">Lab2YouApp</Link> .{' '}
      </strong>
      All rights reserved.
      <div className="float-right">
        <b>Version</b> 1.0.0
      </div>
    </footer>
  );
};
