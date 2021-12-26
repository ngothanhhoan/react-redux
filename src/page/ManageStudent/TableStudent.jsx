import { Table, Button, Popconfirm } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const TableStudent = (props) => {
  const {
    listStudent,
    setSelectedStudent,
    setIsModalVisible,
    onDeleteStudent,
  } = props;

  const onEditStudent = (studentInfo) => {
    setSelectedStudent(studentInfo);
    setIsModalVisible(true);
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
      render: (value, studentInfo) => (
        <div>
          <Button
            type="primary"
            size="small"
            icon={<EditOutlined />}
            shape="circle"
            onClick={() => onEditStudent(studentInfo)}
            style={{ marginRight: "1rem" }}
          />

          <Popconfirm
            title="Bạn có chắc chắn muốn xóa?"
            onConfirm={() => onDeleteStudent(studentInfo.key - 1)}
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

  const data = listStudent.map((student, index) => ({
    key: index + 1,
    ...student,
  }));

  return <Table columns={columns} dataSource={data} />;
};

export default TableStudent;
