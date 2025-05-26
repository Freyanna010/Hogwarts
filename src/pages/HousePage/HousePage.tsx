import { Col, Row, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { FC,} from "react";
import HouseCard from "@components/HouseCard";
import classes from "./HousePage.module.scss";
import StudentCardList from "@components/StudentCardList";
import { useHousePage } from "./useHausePage";

const HousePage: FC = () => {
  const {
    filteredStudents,
    isStudentsLoading,
    errorMessage,
    currentHouse,
    searchValue,
    handleLikeStudentCard,
    handleStudentCardClick,
    handleSortStudentByName,
    handleChangeSearch,
  } = useHousePage();

  if (isStudentsLoading) {
    return (
      <Spin
        className={classes.spin}
        indicator={<LoadingOutlined spin />}
        size="large"
      />
    );
  }
  if (errorMessage) return <h1>{errorMessage}</h1>;

  return (
    <Row gutter={[24, 24]} justify="start">
      <Col span={24}>
        {currentHouse && (
          <HouseCard
            type="banner"
            house={currentHouse}
            className={classes.houseCardBanner}
          />
        )}
      </Col>

      <Col span={24}>
        <StudentCardList
          onLikeClicK={handleLikeStudentCard}
          onCardClick={handleStudentCardClick}
          onSortClick={handleSortStudentByName}
          onSearchChange={handleChangeSearch}
          students={filteredStudents}
          className={classes.studentContainer}
          searchValue={searchValue}
        />
      </Col>
    </Row>
  );
};

export default HousePage;
