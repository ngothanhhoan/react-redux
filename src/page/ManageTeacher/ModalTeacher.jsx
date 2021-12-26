import { useEffect, useMemo } from "react";
import { Modal, Form, Input, InputNumber } from "antd";
import { connect } from "react-redux";
import {
  actSetModalTeacherVisible,
  actSaveSetSelectedTeacher,
  actSaveCreateTeacher,
  actSaveUpdateTeacher,
} from "src/redux/action/teacher";

const ModalTeacher = (props) => {
  const { isModalVisible, selectedTeacher } = props;
  const [form] = Form.useForm();

  const isCreateMode = useMemo(() => {
    if (selectedTeacher) {
      return false;
    }

    return true;
  }, [selectedTeacher]);

  useEffect(() => {
    form.setFieldsValue({
      name: selectedTeacher && selectedTeacher.name,
      age: selectedTeacher && selectedTeacher.age,
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
      props.actSaveCreateTeacher(data);
    } else {
      props.actSaveUpdateTeacher({
        indexOfTeacher: selectedTeacher.key - 1,
        studentInfo: data,
      });
    }

    props.actSetModalTeacherVisible(false);
  };

  const handleCancel = () => {
    props.actSetModalTeacherVisible(false);
  };

  const afterClose = () => {
    props.actSaveSetSelectedTeacher(null);
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

export default connect(
  (storeState) => ({
    isModalVisible: storeState.Teacher.isModalVisible,
    selectedTeacher: storeState.Teacher.selectedTeacher,
  }),
  {
    actSetModalTeacherVisible,
    actSaveSetSelectedTeacher,
    actSaveCreateTeacher,
    actSaveUpdateTeacher,
  }
)(ModalTeacher);
