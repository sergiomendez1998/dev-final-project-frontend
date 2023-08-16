import {useState} from 'react';
import {Link} from "react-router-dom";
import {Collapse} from "react-bootstrap";

export const NavWrapper = ({title, items, iconName})  =>
{
    const [open, setOpen] = useState(false);

    return (
        <div>
            <a
                href="#"
                className="nav-link d-flex justify-content-between"
                onClick={() => setOpen(!open)}
                aria-expanded={open}
            >
                <p>
                    <i className={iconName}/>
                    {" "}
                    {title}
                </p>
                <i className={`${!open ? "fas fa-angle-left" : "fas fa-angle-down"} pt-2`}/>
            </a>
            <Collapse in={open}>
                <ul className="nav">f
                    {items.map((it, key) => {
                        if (it.shouldShowItem)
                            return (
                                <li className="nav-item ps-3" key={key}>
                                    <Link to={it.path} className="nav-link">
                                        <i className={it.iconName}/>
                                        {" "}
                                        {it.name}
                                    </Link>
                                </li>
                            )
                        return null;
                    })}
                </ul>
            </Collapse>
        </div>
    );
}