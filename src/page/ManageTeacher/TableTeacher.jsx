import { Table, Button, Popconfirm } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import {
  actSetModalTeacherVisible,
  actSaveSetSelectedTeacher,
  actSaveDeleteTeacher,
} from "src/redux/action/teacher";

const TableTeacher = (props) => {
  const { listTeacher } = props;

  const onEditTeacher = (teacherInfo) => {
    props.actSaveSetSelectedTeacher(teacherInfo);
    props.actSetModalTeacherVisible(true);
  };

  const columns = [
    {
      title: "STT",
      dataIndex: "key",
      width: "5%",
    },
    {
      title: "Name",
      dataIndex: "name",
      render: (name) => <a>{name}</a>,
      width: "20%",
    },
    {
      title: "Age",
      dataIndex: "age",
      width: "15%",
    },
    {
      title: "Address",
      dataIndex: "address",
      width: "15%",
    },
    {
      title: "",
      dataIndex: "function",
      width: "15%",
      render: (value, teacherInfo) => (
        <div>
          <Button
            type="primary"
            size="small"
            icon={<EditOutlined />}
            shape="circle"
            onClick={() => onEditTeacher(teacherInfo)}
            style={{ marginRight: "1rem" }}
          />

          <Popconfirm
            title="Bạn có chắc chắn muốn xóa?"
            onConfirm={() => props.actSaveDeleteTeacher(teacherInfo.key - 1)}
            okText="Có"
            cancelText="Không"
          >
            <Button
              type="primary"
              danger
              size="small"
              icon={<DeleteOutlined />}
              shape="circle"
            />
          </Popconfirm>
        </div>
      ),
    },
  ];

  const data = listTeacher.map((teacher, index) => ({
    key: index + 1,
    ...teacher,
  }));

  return <Table columns={columns} dataSource={data} />;
};

export default connect(
  (storeState) => ({
    listTeacher: storeState.Teacher.listTeacher,
  }),
  {
    actSetModalTeacherVisible,
    actSaveSetSelectedTeacher,
    actSaveDeleteTeacher,
  }
)(TableTeacher);
