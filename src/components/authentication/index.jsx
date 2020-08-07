import React from 'react';

import { Form, Input, Button } from 'antd';

import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions/authAction';

import './authentication.scss';

const layout = {
  labelCol: {
    span: 0,
  },
  wrapperCol: {
    span: 3,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 0,
    span: 2,
  },
};

const Authentication = () => {
  const dispatch = useDispatch();

  const onFinish = (values) => {
    console.log('Success:', values);
    dispatch(login(values));
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      {...layout}
      layout='vertical'
      name='basic'
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label='Логин'
        name='login'
        rules={[
          {
            required: true,
            message: 'Пожалуйста, введите ваш логин',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Пароль'
        name='password'
        rules={[
          {
            required: true,
            message: 'Пожалуйста, введите ваш пароль',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Authentication;
