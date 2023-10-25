import { number } from "prop-types";
import { FaPlus, } from "react-icons/fa";
import { TbReportAnalytics, TbUser, TbDashboard } from "react-icons/tb";

const MENU = {
    1: {
        icon: <TbReportAnalytics size={23} />,
    },
    2: {
        icon: <TbDashboard size={23} />,
    },
    3: {
        icon: <TbUser size={23} />,
    },
    4: {
        icon: <FaPlus size={23} />,
    },
};

export const IConMenu = ({ id }) => {
    const menu = MENU[id];

    return <span>{menu.icon}</span>; // Aquí se cambió a <div> y se usa menu.icon
}

IConMenu.propTypes = {
    id: number.isRequired,
};