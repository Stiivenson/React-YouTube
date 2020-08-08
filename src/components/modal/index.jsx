import React, { useState } from 'react';

import { Form, Input, Select, Slider, InputNumber, Space, Modal } from 'antd';

import { useSelector, useDispatch } from 'react-redux';
import searchVideos from '../../redux/actions/youtubeAction';

import './modal.scss';

const { Option } = Select;

function ModalSaveQuery({ visible, toggleModal, togglePopconfirm }) {
  // const dispatch = useDispatch();
  const { isEmpty, query } = useSelector((state) => state.video);

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const [form] = Form.useForm();
  form.setFieldsValue({
    query: `${query}`,
  });

  const onGenderChange = (value) => {
    switch (value) {
      case 'male':
        // form.setFieldsValue({ note: "Hi, man!" });
        return;
      case 'female':
        // form.setFieldsValue({ note: "Hi, lady!" });
        return;
      case 'other':
        // form.setFieldsValue({ note: "Hi there!" });
        return;
    }
  };

  const [sliderValue, setSlider] = useState(25);

  return (
    <Modal
      title='Сохранить запрос'
      visible={visible}
      onOk={() => {
        toggleModal();
        togglePopconfirm();
      }}
      okText='Сохранить'
      onCancel={toggleModal}
      cancelText='Отмена'
    >
      <Form
        className='page-search__form-container'
        form={form}
        layout='vertical'
        name='basic'
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Space className='page-auth__form__space' size={15} direction='vertical' align='center'>
          <Form.Item label='Запрос' name='query'>
            <Input disabled='true' />
          </Form.Item>

          <Form.Item label='Название' name='title' rules={[{ required: true }]}>
            <Input placeholder='Укажите название' />
          </Form.Item>

          <Form.Item label='Сортировать по' name='sort'>
            <Select placeholder='Без сортировки' onChange={onGenderChange} allowClear>
              <Option value='male'>male</Option>
              <Option value='female'>female</Option>
              <Option value='other'>other</Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <div>Максимальное количество видео</div>
            <div className='page-search__form__slider-container'>
              <Slider
                className='page-search__form__slider'
                min={1}
                max={50}
                onChange={(value) => setSlider(value)}
                value={typeof sliderValue === 'number' ? sliderValue : 0}
              />
              <InputNumber
                min={1}
                max={50}
                style={{ margin: '0 16px' }}
                value={sliderValue}
                onChange={(value) => setSlider(value)}
              />
            </div>
          </Form.Item>
        </Space>
      </Form>
    </Modal>
  );
}

export default ModalSaveQuery;
