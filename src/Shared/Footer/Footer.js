/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import logo from '../../assets/hair-logo.jpg';


const Footer = () => {
    return (
        <footer className="footer p-32 bg-black text-white">
        <div>
        <img style={{'height':'100px'}} src={logo} alt="" />
          <p>Haircut Industries Ltd.</p>
        </div> 
        <div>
          <span className="footer-title">Services</span> 
          <a  className="link link-hover">Branding</a> 
          <a  className="link link-hover">Design</a> 
          <a  className="link link-hover">Marketing</a> 
          <a  className="link link-hover">Advertisement</a>
        </div> 
        <div>
          <span className="footer-title">Company</span> 
          <a  className="link link-hover">About us</a> 
          <a  className="link link-hover">Contact</a>
        </div> 
        <div>
          <span className="footer-title">Legal</span> 
          <a  className="link link-hover">Terms of use</a> 
          <a  className="link link-hover">Privacy policy</a> 
          <a  className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    );
};

export default Footer;