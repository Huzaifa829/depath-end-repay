import React, { useState } from 'react';
import { Button, Form, Input, TreeSelect, Checkbox, Row, Col, DatePicker, Radio, Select } from 'antd';
import '../cssFile/Tab3.css'
import { useTranslation } from 'react-i18next';
const Tab7 = () => {
  const buttonStyles = {
    backgroundColor: 'black',
    color: '#ffffff',
    borderColor: 'black',
    transition: 'background-color 0.3s, color 0.3s, border-color 0.3s',
  };
  const [componentSize, setComponentSize] = useState('default');
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const [t, i18n] = useTranslation("global")
  return (
    <div className='HA_table_main_add'>
      <div className='HA_table_main_add_child'>
        <p className='HA_table_main_add_child_text'>{t("Tab7_1.message")}</p>{/*Notification Settings*/}
      </div>
      <Form
        labelCol={{
          span: 24,
        }}
        wrapperCol={{
          span: 24,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
        style={{
          maxWidth: 1000,
        }}
      >
        
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label={t("Tab7_2.message")}>{/*Notification Frequency:*/}
              <Select placeholder={t("Tab7_3.message")}>{/*Weekly*/}
                <Select.Option value="demo">{t("Tab7_4.message")}</Select.Option>{/*Weekly*/}
                  <Select.Option value="demo">{t("Tab7_5.message")}</Select.Option>{/*Daily*/}
                  <Select.Option value="demo">{t("Tab7_6.message")}</Select.Option>{/*Monthly*/}
                </Select>
              </Form.Item>
            </Col>
          <Col span={12}>
            <Form.Item label={t("Tab7_7.message")}>{/*Notification Channel:*/}
              <Select placeholder={t("Tab7_8.message")}>{/*Email*/}
                <Select.Option value="demo">{t("Tab7_9.message")}</Select.Option>{/*Email*/}
                <Select.Option value="demo">{t("Tab7_10.message")}</Select.Option>{/*Facebook*/}
              </Select>
            </Form.Item>
          </Col>
        </Row>


        <Form.Item>
          <Button style={buttonStyles}>{t("Tab7_11.message")}</Button>{/*Save Settings*/}
        </Form.Item>
      </Form>
    </div>
  );
};
export default Tab7;