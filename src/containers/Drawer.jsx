import { node, bool, func } from 'prop-types';
import { IoIosClose } from 'react-icons/io';

export const Drawer = ({ children, isOpen, setIsOpen, title }) => {
  return (
    <main
      className={
        'fixed overflow-hidden z-[100] bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out ' +
        (isOpen
          ? ' transition-opacity opacity-100 duration-500 translate-x-0  '
          : ' transition-all delay-500 opacity-0 translate-x-full  ')
      }
    >
      <section
        className={
          'w-screen max-w-md right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform ' +
          (isOpen ? ' translate-x-0 ' : ' translate-x-full ')
        }
      >
        <article className="relative my-6 flex h-full max-w-lg flex-col overflow-y-scroll px-0 pb-10 scrollbar-thin">
          <header className="mt-10 p-4 text-lg font-bold md:mt-0">{title}</header>
          <IoIosClose
            className="absolute right-4 top-3 cursor-pointer text-red-600"
            size={35}
            onClick={() => {
              setIsOpen(false);
            }}
          />
          {children}
        </article>
      </section>
      <section
        className="h-full w-screen cursor-pointer"
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
};

Drawer.propTypes = {
  children: node,
  isOpen: bool,
  setIsOpen: func,
  title: node,
};
