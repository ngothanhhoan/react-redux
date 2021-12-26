import { useEffect } from "react";
import { Button } from "antd";
import { connect } from "react-redux";
import { PlusOutlined } from "@ant-design/icons";
import { Layout } from "src/component";
import {
  actSaveSetListStudent,
  actSetModalStudentVisible,
} from "src/redux/action/student";
import { ManageStudentPageWrapper } from "./style";
import TableStudent from "./TableStudent";
import ModalStudent from "./ModalStudent";

const ManageStudent = (props) => {
  useEffect(() => {
    props.actSaveSetListStudent([
      {
        name: "Hoan",
        age: 32,
        address: "New York No. 1 Lake Park",
      },
    ]);
  }, []);

  const showModal = () => {
    props.actSetModalStudentVisible(true);
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

        <TableStudent />
        <ModalStudent />
      </ManageStudentPageWrapper>
    </Layout>
  );
};

export default connect(null, {
  actSaveSetListStudent,
  actSetModalStudentVisible,
})(ManageStudent);
