import React, { useState } from 'react';
import {
    FaChevronDown,
    FaInbox,
    FaRegCalendarAlt,
    FaRegCalendar,
} from 'react-icons/fa';
import { useSelectedProjectsValue } from '../../context';

export const Sidebar = () => { 
    const {setSelectedProject } = useSelectedProjectsValue;
    const [ active, setActive ]  = useState('inbox');
    const [ showProjects, setShowProjects ]  = useState(true);

    return (
    <div className="sidebar" data-testid="sidebar">
        <ul className="sidebar__generic">
            <li data-testid="inbox" className="inbox">
                <span>
                    <FaInbox />
                </span>
                <span>Inbox</span>
            </li>
            <li data-testid="today" className="today">
                <span>
                    <FaRegCalendar />
                </span>
                <span>Today</span>
            </li>
            <li data-testid="next_week" className="next_week">
                <span>
                    <FaRegCalendarAlt />
                </span>
                <span>Next week</span>
            </li>
        </ul>
        <div className="sidebar__middle">
            <span>
                <FaChevronDown/>
            </span>
            <h2>Projects</h2>
            <ul className="sidebar__projects">
                </ul>
                Projects will be here!
        </div>
    </div>
    )
};