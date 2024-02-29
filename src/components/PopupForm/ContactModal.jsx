import React from 'react';
import { Modal, Button, Form, Input } from 'antd';
import logo1 from "../../assets/images/logoMain2.png"

const ContactModal = ({ visible, onClose }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Submitted values:', values);
    // You can handle form submission logic here
    onClose(); // Close the modal after form submission
  };

  return (
    <Modal
      visible={visible}
      title={
        <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={logo1} alt="Debt & Repay Logo" style={{ marginRight: '10px', width: '180px', height: '50px' }} />
          <span>Contact Us</span>
        </div>
      }
      onCancel={onClose}
      footer={null}
      bodyStyle={{ maxHeight: '400px', overflowY: 'auto' }}
    >
      <div>
        <p>
          We'd love to hear from you! Please feel free to contact us with any questions, concerns, or feedback you may have.
        </p>
        <p>
          You can reach us via email or phone, or by filling out the form below.
        </p>
      </div>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please enter your name' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: 'Please enter your email' },
            { type: 'email', message: 'Please enter a valid email' }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Message"
          name="message"
          rules={[{ required: true, message: 'Please enter your message' }]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ContactModal;
