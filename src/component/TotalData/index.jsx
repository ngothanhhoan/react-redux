import { TotalDataWrapper } from "./style";

const TotalData = (props) => {
  const { total } = props;

  return <TotalDataWrapper>Có {total} dữ liệu</TotalDataWrapper>;
};

export default TotalData;
