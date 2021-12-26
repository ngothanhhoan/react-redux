import { useEffect } from "react";
import { Button } from "antd";
import { connect } from "react-redux";
import { PlusOutlined } from "@ant-design/icons";
import { Layout } from "src/component";
import {
  actSaveSetListTeacher,
  actSetModalTeacherVisible,
} from "src/redux/action/teacher";
import { ManageTeacherPageWrapper } from "./style";
import TableTeacher from "./TableTeacher";
import ModalTeacher from "./ModalTeacher";

const ManageTeacher = (props) => {
  useEffect(() => {
    props.actSaveSetListTeacher([
      {
        name: "Hoan",
        age: 32,
        address: "New York No. 1 Lake Park",
      },
    ]);
  }, []);

  const showModal = () => {
    props.actSetModalTeacherVisible(true);
  };

  return (
    <Layout>
      <ManageTeacherPageWrapper>
        <div className="heading">
          <div className="title">Quản lý giáo viên</div>

          <div className="group">
            <Button type="primary" icon={<PlusOutlined />} onClick={showModal}>
              Thêm mới
            </Button>
          </div>
        </div>

        <TableTeacher />
        <ModalTeacher />
      </ManageTeacherPageWrapper>
    </Layout>
  );
};

export default connect(null, {
  actSaveSetListTeacher,
  actSetModalTeacherVisible,
})(ManageTeacher);
