import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Form, Input, Select, Slider, InputNumber, Space, Modal } from 'antd';

import { useSelector, useDispatch } from 'react-redux';
import { saveQuery } from '../../redux/actions/lS-manageQueries';

import './modal.scss';

const { Option } = Select;

function ModalSaveQuery({ visible, toggleModal, togglePopconfirm }) {
  const dispatch = useDispatch();
  const { query } = useSelector((state) => state.video);

  // Set Form instance & 'query' field title
  const [form] = Form.useForm();
  form.setFieldsValue({
    // query: `${query}`,
    query: 'Kek',
    sort: 'none',
  });

  const onFinish = (values) => {
    values.id = uuidv4();
    values.maxNumb = sliderValue;

    console.log('Success:', values);
    dispatch(saveQuery(values));
    toggleModal();
    togglePopconfirm();
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  // ChangeSelect
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

  // Change Slider
  const [sliderValue, setSlider] = useState(25);

  return (
    <Modal
      title='Сохранить запрос'
      visible={visible}
      onOk={() => {
        form.submit();
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
            <Input disabled={true} />
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
