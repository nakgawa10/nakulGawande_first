import { Component } from "react";
import { FileEarmarkCodeFill, PersonFill, Instagram, Envelope, CalendarRangeFill, FileEarmarkPersonFill } from 'react-bootstrap-icons';

export class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
        <ul className="navigation_list">
          <li className="navigation_list_items"><a href='/#about_me'><PersonFill size={27} className="navigation_list_items_icons"/> About Me</a></li>
          <li className="navigation_list_items"><a href='/#skilled_work'><FileEarmarkCodeFill size={27} className="navigation_list_items_icons"/> Work</a></li>
          <li className="navigation_list_items"><a href='/#timeline'><CalendarRangeFill size={27} className="navigation_list_items_icons"/> Timeline</a></li>
          <li className="navigation_list_items"><a href='./../../../public/Nakul.pdf'><FileEarmarkPersonFill size={27} className="navigation_list_items_icons"/> Resume</a></li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
