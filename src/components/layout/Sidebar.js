import React from 'react';
import LineIcon from 'react-lineicons';

export const Sidebar = () => 
<div className="sidebar" data-testid="sidebar">
    <ul className="sidebar__generic">
        <li>
            <span>
                <LineIcon name="envelope"/>
            </span>
            <span>
            Inbox
            </span>
        </li>
        <li>
            <span>
                <LineIcon name="calendar"/>
            </span>
            <span>
            Today
            </span>
        </li>
        <li>
            <span>
                <LineIcon name="calendar"/>
            </span>
            <span>
            Next week
            </span>
        </li>
    </ul>
    <div className="sidebar__middle">
        <span>
        <LineIcon name="chevron-down"/>
        </span>
        <h2>Projects</h2>
        <ul className="sidebar__projects">Projects will be here!</ul>
    </div>
</div>;