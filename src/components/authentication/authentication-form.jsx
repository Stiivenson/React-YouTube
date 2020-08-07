import React from 'react';

import { Form, Input, Button, Space } from 'antd';

import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions/authAction';

const tailLayout = {
  wrapperCol: {
    span: 8,
    offset: 8,
  },
};

const AuthenticationFrom = () => {
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
      className='page-auth__form'
      layout='vertical'
      name='basic'
      hideRequiredMark='false'
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Space className='page-auth__form__space' size={15} direction='vertical' align='center'>
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
          <Button type='primary' size='large' htmlType='submit'>
            Войти
          </Button>
        </Form.Item>
      </Space>
    </Form>
  );
};

export default AuthenticationFrom;
