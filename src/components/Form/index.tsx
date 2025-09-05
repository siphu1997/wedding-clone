import { CSSProperties, FC, Fragment, PropsWithChildren, useState } from 'react';
import { Modal, Form, Input, Radio, message } from 'antd';

import './index.css';

const { TextArea } = Input;

const FormContent = [
  {
    label: 'Bạn tên gì vậy?',
    name: 'name',
    placeholder: 'Họ và Tên',
    type: 'input',
    required: 'Bạn quên nhập rồi nè!',
  },
  {
    label: 'Đến chung vui cùng gia đình nhé!',
    name: 'join',
    type: 'radio',
    required: 'Chọn một cái nhá!',
    options: [
      { label: 'Chắc chắn rồi 👌😘', value: 'Tham gia' },
      { label: 'Xin lỗi, mình có việc bận rồi 😭', value: 'Không' },
    ],
  },
  {
    label: 'Bạn tham dự tiệc nào nhỉ?',
    name: 'partyType',
    type: 'radio',
    radioClassName: 'radio-item',
    required: 'Chọn một cái nhá!',
    options: [
      { label: 'Tiệc thân mật (Thứ 7, 22/03) 😚', value: 'Thứ 7' },
      { label: 'Lễ Thành Hôn 😍 (Chủ nhật, 23/03)', value: 'Chủ nhật' },
      { label: 'Cả 2 😎', value: 'Cả 2' },
    ],
  },
  {
    label: 'Bạn là?',
    name: 'related',
    type: 'radio',
    required: 'Chọn một cái nhá!',
    options: [
      { label: 'Bạn cô dâu 👰', value: 'CD' },
      { label: 'Bạn chú rể 🤵', value: 'CR' },
    ],
  },
  {
    label: 'Gửi lời chúc mừng đến chú rể & cô dâu',
    name: 'wish',
    type: 'textarea',
    required: '',
    rows: 4,
  },
];

type FormType = {
  name: string;
  join: string;
  partyType: string;
  related: string;
  wish: string;
};

const endpoint = '';

const FormDK: FC<PropsWithChildren<{ className?: string; style?: CSSProperties }>> = ({
  style = {},
  className = '',
  children,
}) => {
  const [form] = Form.useForm<FormType>();
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const openForm = () => setIsOpen(true);
  const closeForm = () => {
    if (isLoading) return;

    setIsOpen(false);
  };

  const handleSubmit = async (values: FormType) => {
    setIsLoading(true);
    try {
      await fetch(`${endpoint}/api/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, ThoiGian: new Date().toISOString() }),
      });

      form.resetFields();
      closeForm();

      message.success('Gửi Thông Tin Thành Công! ✅', 10);
    } catch (error) {
      console.error('Error saving data:', error);
      message.error('Có chút vấn đề, thử lại nhá! ❌', 5);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Fragment>
      <div
        onClick={openForm}
        style={{ ...style, width: 'max-content', height: 'max-content' }}
        className={className}>
        {children}
      </div>

      <Modal
        centered
        open={isOpen}
        title='XÁC NHẬN THAM DỰ'
        className='modal-form-dk'
        onOk={form.submit}
        onCancel={closeForm}
        okText='Xác nhận'
        okButtonProps={{ loading: isLoading, disabled: isLoading }}
        cancelButtonProps={{ disabled: isLoading }}
        cancelText='Hủy'>
        <Form form={form} onFinish={handleSubmit} className='form-dk' layout='vertical'>
          {FormContent.map((item, index) => (
            <Form.Item
              key={index}
              className='form-dk-item'
              label={item.label}
              name={item.name}
              rules={[{ required: !!item.required, message: item.required }]}>
              {item.type === 'input' && (
                <Input placeholder={item.placeholder} variant='underlined' />
              )}
              {item.type === 'radio' && (
                <Radio.Group>
                  {item.options?.map((option, idx) => (
                    <Radio key={idx} className={item.radioClassName} value={option.value}>
                      {option.label}
                    </Radio>
                  ))}
                </Radio.Group>
              )}
              {item.type === 'textarea' && <TextArea rows={item.rows} placeholder='Lời chúc' />}
            </Form.Item>
          ))}
        </Form>
      </Modal>
    </Fragment>
  );
};

export default FormDK;
