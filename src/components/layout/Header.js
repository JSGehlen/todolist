import React from 'react';
import LineIcon from 'react-lineicons';

export const Header = () => {
    const x = 1;
    return (
        <header className="header" data-testid="header">
            <nav>
                <div className="logo">
                    <img src="/images/logo.png" alt="Todolist"/>
                </div>
                <div className="settings">
                    <ul>
                        <li>+</li>
                        <li>
                            <LineIcon size="xs" name="pizza"/>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}