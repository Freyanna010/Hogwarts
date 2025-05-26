import {
  filterStudentsByHouse,
} from "@features/studentsSlice";
import { chooseHouseByName } from "@features/hоusesSlice";
import { AppDispatch, RootState } from "@store/store";
import { Col, Row, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import HouseCard from "@components/HouseCard";
import classes from "./HousePage.module.scss";
import { useStudentsListHandlers } from "@shared/hooks";
import StudentCardList from "@components/StudentCardList";

const HousePage: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { houseName } = useParams();

  const { filteredStudents, allStudents, isStudentsLoading, errorMessage } =
    useSelector((state: RootState) => state.students);
  const { currentHouse } = useSelector((state: RootState) => state.houses);

  const {
    handleLikeStudentCard,
    handleStudentCardClick,
    handleSortStudentByName,
    handleChangeSearch,
    searchValue,
  } = useStudentsListHandlers();

  useEffect(() => {
    if (allStudents.length > 0 && houseName) {
      dispatch(filterStudentsByHouse(houseName));
      dispatch(chooseHouseByName(houseName));
    }
  }, [dispatch, houseName, allStudents]);

  if (isStudentsLoading) {
    return (
      <Spin
        className={classes.spin}
        indicator={<LoadingOutlined spin />}
        size="large"
      />
    );
  }

  if (errorMessage) {
    return <h1>{errorMessage}</h1>;
  }

  return (
    <>
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
    </>
  );
};

export default HousePage;

