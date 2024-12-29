import React from 'react';
import { Menu, Search, Code2, Trophy, Users2, MessageSquare, Bell, User } from 'lucide-react';
import './Navbar.css'; 
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <div className="navbar-left">
            <button className="navbar-toggle lg:hidden">
              <Menu size={20} />
            </button>
            <div className="navbar-left-items">
              <div className="logo-container">
                <Code2 className="logo-icon" />
                <span className="logo-text">CGMI</span>
              </div>
              <div className="navbar-links">
                <Link to="/explore" className="navbar-link">Explore</Link>
                <Link to="/problems" className="navbar-link">Problems</Link>
                <Link to="/contest" className="navbar-link">Contest</Link>
                <Link to="/discuss" className="navbar-link">Discuss</Link>
              </div>
            </div>
          </div>

          {/* Right section */}
          <div className="navbar-right">
            <div className="search-container hidden md:block">
              <div className="search-icon-container">
                <Search className="search-icon" />
              </div>
              <input
                type="text"
                className="search-input"
                placeholder="Search..."
              />
            </div>
            
            <div className="navbar-actions">
              <button className="action-button">
                <MessageSquare size={20} />
              </button>
              <button className="action-button">
                <Bell size={20} />
              </button>
              <button className="action-button">
                <User size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
