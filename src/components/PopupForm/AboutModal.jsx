import React from 'react';
import { Modal, Button } from 'antd';
import logo1 from "../../assets/images/logoMain2.png"

const AboutModal  = ({ visible, onClose }) => {
  return (
    <Modal
      visible={visible}
      title={
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo1} alt="Debt & Repay Logo" style={{ marginRight: '10px', width: '180px', height: '50px' }} />
          <span>About Debt & Repay</span>
        </div>
      }
      onCancel={onClose}
      footer={null}
      bodyStyle={{ maxHeight: '400px', overflowY: 'auto' }}
    >
      <div>
        <h2>Welcome to Debt & Repay</h2>
        <p>
          At Debt & Repay, we understand the challenges of managing debt and the importance of effective repayment strategies.
          Our platform provides comprehensive tools and resources to help individuals take control of their finances and 
          achieve their repayment goals.
        </p>
        <h3>Our Services</h3>
        <ul>
          <li>Debt Consolidation</li>
          <li>Financial Planning</li>
          <li>Budgeting Assistance</li>
          <li>Loan Management</li>
          <li>Credit Counseling</li>
        </ul>
        <p>
          Whether you're struggling with credit card debt, student loans, or other financial obligations, Debt & Repay is 
          here to support you every step of the way. Our team of experts is dedicated to helping you navigate the complexities 
          of debt repayment and achieve financial freedom.
        </p>
      </div>
    </Modal>
  );
};

export default AboutModal;
