import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Form, Input, Select, Slider, InputNumber, Space, Modal } from 'antd';

import { useDispatch, useSelector } from 'react-redux';
import { saveQuery, changeQuery } from '../../redux/actions/lS-manageQueries';

import './modal.scss';

const { Option } = Select;

function ModalQuery({ visible, mode, toggleModal, togglePopconfirm, selectedQuery }) {
  const dispatch = useDispatch();
  const { query } = useSelector((state) => state.video);

  // Set Form instance
  const [form] = Form.useForm();

  // Load selectedQuery data every time, prevent drop to these values afer dispatch
  const [allowChange, setAllowChange] = useState(true);
  if (allowChange) {
    form.setFieldsValue({
      query: `${mode === 'edit' ? selectedQuery.query.query : query}`,
      title: `${mode === 'edit' ? selectedQuery.query.title : ''}`,
      sort: `${mode === 'edit' ? selectedQuery.query.sort : 'relevance'}`,
      maxNumb: `${mode === 'edit' ? selectedQuery.query.maxNumb : 25}`,
      maxNumbInput: `${mode === 'edit' ? selectedQuery.query.maxNumb : 25}`,
    });
  }

  const setSlider = (value) => {
    form.setFieldsValue({
      maxNumb: value,
      maxNumbInput: value,
    });
  };

  const onFinish = (values) => {
    if (mode === 'edit') {
      values.id = selectedQuery.query.id;
      dispatch(changeQuery(values));
    } else {
      values.id = uuidv4();
      dispatch(saveQuery(values));
      togglePopconfirm();
    }
    toggleModal();
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Modal
      title={mode === 'edit' ? 'Сохранить запрос' : 'Изменить запрос'}
      visible={visible}
      onOk={() => {
        setAllowChange(false);
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
            <Input disabled={mode === 'edit' ? false : true} />
          </Form.Item>

          <Form.Item label='Название' name='title' rules={[{ required: true }]}>
            <Input placeholder='Укажите название' />
          </Form.Item>

          <Form.Item label='Сортировать по' name='sort'>
            <Select placeholder='Без сортировки' allowClear>
              <Option value='date'>Дате</Option>
              <Option value='rating'>Рейтингу </Option>
              <Option value='title'>Алфавитному порядку</Option>
              <Option value='videoCount'>Количеству видео на канале</Option>
              <Option value='viewCount'>Количеству просмотров видео</Option>
              <Option value='relevance'>Без сортировки</Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <div>Максимальное количество видео</div>
            <div className='page-search__form__slider-container'>
              <Form.Item name='maxNumb'>
                <Slider
                  className='page-search__form__slider'
                  min={1}
                  max={50}
                  onChange={(value) => setSlider(value)}
                />
              </Form.Item>
              <Form.Item name='maxNumbInput'>
                <InputNumber min={1} max={50} onChange={(value) => setSlider(value)} />
              </Form.Item>
            </div>
          </Form.Item>
        </Space>
      </Form>
    </Modal>
  );
}

export default ModalQuery;
