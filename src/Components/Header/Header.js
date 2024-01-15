import React from 'react';
import { AiOutlineUser, AiOutlineDown, AiOutlineSearch, AiOutlineBell } from 'react-icons/ai';

const Header = () => {
  const headerStyle = {
    backgroundColor: '#009999',
    color: 'white',
    width: '100%',
    padding: '10px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
  };

  const iconStyle = {
    fontSize: '2em',
  };

  const empLiveStyle = {
    fontFamily: "'Roboto Condensed', sans-serif",
    fontSize: '2em',
    fontWeight: '700',
    marginRight: '2em',
  };

  const navItemStyle = {
    fontFamily: "'Roboto Condensed', sans-serif",
    fontSize: '1em',
    fontWeight: '400',
    display: 'flex',
    alignItems: 'center',
    marginRight: '15px',
  };

  const arrowIconStyle = {
    fontSize: '0.7em',
    marginLeft: '5px',
  };

  const iconButtonStyle = {
    fontSize: '1.5em',
    margin: '0 10px',
  };

  const userInfoBlockStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginLeft: '10px',
  };

  const userInfoStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '2px',
  };

  const companyNameStyle = {
    fontSize: '0.8em',
  };

  const navItems = ['Employees', 'Rosters', 'Timesheets', 'Analysis', 'Reporting', 'Configuration', 'ESS', 'ClockLive'];

  return (
    <header style={headerStyle}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <AiOutlineUser style={iconStyle} />
        <span style={empLiveStyle}>EmpLive</span>
        {navItems.map(item => (
          <div key={item} style={navItemStyle}>
            {item}
            <AiOutlineDown style={arrowIconStyle} />
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <AiOutlineSearch style={iconButtonStyle} />
        <AiOutlineBell style={iconButtonStyle} />
        <div style={userInfoBlockStyle}>
          <div style={userInfoStyle}>
            <span>Mazhar Fareed</span>
            <AiOutlineDown style={arrowIconStyle} />
          </div>
          <span style={companyNameStyle}>Catering Industries</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
