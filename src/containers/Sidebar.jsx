import { useEffect, useState } from 'react';
import { useRef } from 'react';
import { motion } from 'framer-motion';

// * React icons
import { IoIosArrowBack } from 'react-icons/io';
import { SlLogout, SlSettings } from 'react-icons/sl';
import { AiOutlineAppstore } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { HiOutlineDatabase } from 'react-icons/hi';
import { TbReportAnalytics } from 'react-icons/tb';
import { RiBuilding3Line } from 'react-icons/ri';
import { useMediaQuery } from 'react-responsive';
import { MdMenu } from 'react-icons/md';
import { useLocation } from 'react-router-dom';
import { SubMenu } from '../components/links/SubMenu';
import { useAuth } from '../hooks/useAuth';
import { useLogin } from '../hooks/useLogin';
import { AnimatedLink } from '../components/links/AnimatedLink';

export const Sidebar = () => {
  const { email, name } = useAuth();
  const { handlerLogout } = useLogin();
  let isTabletMid = useMediaQuery({ query: '(max-width: 768px)' });
  const [open, setOpen] = useState(isTabletMid ? false : true);
  const sidebarRef = useRef();
  const { pathname } = useLocation();

  useEffect(() => {
    if (isTabletMid) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isTabletMid]);

  useEffect(() => {
    isTabletMid && setOpen(false);
  }, [isTabletMid, pathname]);

  const Nav_animation = isTabletMid
    ? {
        open: {
          x: 0,
          width: '16rem',
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        open: {
          width: '16rem',
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: '4rem',
          transition: {
            damping: 40,
          },
        },
      };

  const subMenusList = [
    {
      name: 'build',
      icon: RiBuilding3Line,
      menus: ['auth', 'app_settings', 'stroage', 'hosting', 'functions'],
    },
    {
      name: 'analytics',
      icon: TbReportAnalytics,
      menus: ['dashboard', 'realtime', 'events', 'audience', 'funnel'],
    },
  ];

  return (
    <div>
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[998] max-h-screen md:hidden ${
          open ? 'block' : 'hidden'
        } `}
      ></div>
      <motion.div
        ref={sidebarRef}
        variants={Nav_animation}
        initial={{ x: isTabletMid ? -250 : 0 }}
        animate={open ? 'open' : 'closed'}
        className="fixed z-[999] h-screen w-[16rem] max-w-[16rem] overflow-hidden bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-gray-700  via-gray-900 
            to-black text-white shadow-xl
         md:relative "
      >
        <div className="mx-3 flex items-center justify-center gap-2.5 border-b border-slate-300 py-3 font-medium">
          <img
            src="/dist/img/logo.jpg"
            className={`${
              !open ? 'w-100 height-10' : 'w-33 height-24'
            } rounded-xl`}
            alt=""
          />
        </div>

        <div className="flex h-full  flex-col">
          <ul className="flex h-[70%] flex-col gap-1 overflow-x-hidden whitespace-pre px-2.5  py-5 text-[0.9rem] font-medium scrollbar-thin  scrollbar-track-indigo-700 md:h-[68%]">
            <li>
              <AnimatedLink to={'/'} className="link">
                <AiOutlineAppstore size={23} className="min-w-max" />
                Dashboard
              </AnimatedLink>
            </li>
            <li>
              <AnimatedLink to={'/catalog'} className="link">
                <BsPerson size={23} className="min-w-max" />
                Authentication
              </AnimatedLink>
            </li>
            <li>
              <AnimatedLink to={'/stroage'} className="link">
                <HiOutlineDatabase size={23} className="min-w-max" />
                Stroage
              </AnimatedLink>
            </li>

            {(open || isTabletMid) && (
              <div className="border-y border-slate-300 py-3 ">
                <small className="mb-2 inline-block pl-3 text-slate-500">
                  Mantenimientos
                </small>
                {subMenusList?.map((menu) => (
                  <div key={menu.name} className="flex flex-col gap-1">
                    <SubMenu data={menu} />
                  </div>
                ))}
              </div>
            )}
            <li>
              <AnimatedLink to={'/settings'} className="link">
                <SlSettings size={23} className="min-w-max" />
                Settings
              </AnimatedLink>
            </li>
            <li>
              <a
                href="#"
                className="link font-bold text-red-600"
                onClick={handlerLogout}
              >
                <SlLogout size={23} className="min-w-max" />
                Salir
              </a>
            </li>
          </ul>
          {open && (
            <div className="z-50 my-auto max-h-48  w-full flex-1  whitespace-pre   text-sm  font-medium  ">
              <div className="flex items-center justify-between border-y border-slate-300 p-2">
                <p className="rounded-xl bg-teal-50 px-3 py-1.5 text-xs font-bold text-black">
                  {name ?? email}
                </p>
              </div>
            </div>
          )}
        </div>
        <motion.div
          onClick={() => {
            setOpen(!open);
          }}
          animate={
            open
              ? {
                  x: 0,
                  y: 0,
                  rotate: 0,
                }
              : {
                  x: -10,
                  y: -200,
                  rotate: 180,
                }
          }
          transition={{ duration: 0 }}
          className="absolute bottom-3 right-2 z-50 hidden h-fit w-fit cursor-pointer md:block"
        >
          <IoIosArrowBack size={25} />
        </motion.div>
      </motion.div>
      <div
        className="relative z-[995]  m-3 md:hidden"
        onClick={() => setOpen(true)}
      >
        <MdMenu size={25} />
      </div>
    </div>
  );
};
