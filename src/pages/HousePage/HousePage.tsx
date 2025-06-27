import { Col, Row, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { FC } from "react";
import HouseCard from "@components/HouseCard";
import StudentCardList from "@components/StudentCardList";
import LikeButton from "@shared/ui/LikeButton";

import classes from "./HousePage.module.scss";
import { useHousePage } from "./useHausePage";

const HousePage: FC = () => {
  const {
    filteredStudents,
    isStudentsLoading,
    errorMessage,
    currentHouse,
    searchValue,
    handleToggleFavorite,
    handleStudentCardClick,
    handleSortStudentByName,
    handleChangeSearch,
    favoriteStudentsId
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
  onLikeClicK={handleToggleFavorite}
  onCardClick={handleStudentCardClick}
  onSortClick={handleSortStudentByName}
  onSearchChange={handleChangeSearch}
  students={filteredStudents}
  searchValue={searchValue}
  // TODO: можно вынести
  renderActionButton={(student) => {
    const isLiked = favoriteStudentsId.includes(student.id);
    return (
      <LikeButton
        isLiked={isLiked}
        onClick={(e) => {
          e.stopPropagation();
          handleToggleFavorite(student.id);
        }}
      />
    );
  }}
/>
      </Col>
    </Row>
  );
};

export default HousePage;
