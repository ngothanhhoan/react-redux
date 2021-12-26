import { useState, useEffect } from "react";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Layout } from "src/component";
import { ManageStudentPageWrapper } from "./style";
import TableStudent from "./TableStudent";
import ModalStudent from "./ModalStudent";

const ManageStudent = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [listStudent, setListStudent] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

  useEffect(() => {
    setListStudent([
      {
        name: "John Brown",
        age: 32,
        address: "New York No. 1 Lake Park",
      },
    ]);
  }, []);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const onCreateStudent = (studentInfo) => {
    setListStudent([...listStudent, studentInfo]);
  };

  const onUpdateStudent = (indexOfStudent, studentInfo) => {
    const tempListStudent = [...listStudent];
    tempListStudent.splice(indexOfStudent, 1, studentInfo);

    setListStudent(tempListStudent);
  };

  const onDeleteStudent = (indexOfStudent) => {
    const tempListStudent = [...listStudent];
    tempListStudent.splice(indexOfStudent, 1);

    setListStudent(tempListStudent);
  };

  return (
    <Layout>
      <ManageStudentPageWrapper>
        <div className="heading">
          <div className="title">Quản lý học sinh</div>

          <div className="group">
            <Button type="primary" icon={<PlusOutlined />} onClick={showModal}>
              Thêm mới
            </Button>
          </div>
        </div>

        <TableStudent
          listStudent={listStudent}
          setSelectedStudent={setSelectedStudent}
          setIsModalVisible={setIsModalVisible}
          onDeleteStudent={onDeleteStudent}
        />

        <ModalStudent
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
          onCreateStudent={onCreateStudent}
          onUpdateStudent={onUpdateStudent}
          selectedStudent={selectedStudent}
          setSelectedStudent={setSelectedStudent}
        />
      </ManageStudentPageWrapper>
    </Layout>
  );
};

export default ManageStudent;
