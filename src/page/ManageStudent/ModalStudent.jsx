import { useEffect, useMemo } from "react";
import { Modal, Form, Input, InputNumber } from "antd";

const ModalStudent = (props) => {
  const {
    isModalVisible,
    setIsModalVisible,
    onCreateStudent,
    selectedStudent,
    setSelectedStudent,
    onUpdateStudent,
  } = props;
  const [form] = Form.useForm();

  const isCreateMode = useMemo(() => {
    if (selectedStudent) {
      return false;
    }

    return true;
  }, [selectedStudent]);

  useEffect(() => {
    form.setFieldsValue({
      name: selectedStudent && selectedStudent.name,
      age: selectedStudent && selectedStudent.age,
    });
  }, [isModalVisible]);

  const handleOk = async () => {
    const { name, age, address } = await form.validateFields([
      "name",
      "age",
      "address",
    ]);

    const data = {
      name,
      age,
      address,
    };

    if (isCreateMode) {
      onCreateStudent(data);
    } else {
      onUpdateStudent(selectedStudent.key - 1, data);
    }

    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const afterClose = () => {
    setSelectedStudent(null);
  };

  return (
    <Modal
      title={!isCreateMode ? "Chỉnh sửa học sinh" : "Tạo mới học sinh"}
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      afterClose={afterClose}
      cancelText="Hủy"
      okText={!isCreateMode ? "Cập nhật" : "Tạo mới"}
      maskClosable={false}
    >
      <Form
        form={form}
        layout="vertical"
        initialValues={{
          address: "Nam Định",
        }}
      >
        <Form.Item
          label="Tên học sinh"
          name="name"
          tooltip="Trường này là bắt buộc"
          rules={[{ required: true, message: "Vui lòng nhập *Tên học sinh*" }]}
        >
          <Input placeholder="Nhập tên học sinh" size="large" />
        </Form.Item>

        <Form.Item
          label="Tuổi"
          name="age"
          rules={[{ required: true, message: "Vui lòng nhập *Tuổi*" }]}
        >
          <InputNumber
            placeholder="Nhập số tuổi"
            style={{ width: "100%" }}
            size="large"
            min={10}
            max={24}
          />
        </Form.Item>

        <Form.Item label="Địa chỉ" name="address">
          <Input placeholder="Nhập địa chỉ" size="large" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalStudent;
