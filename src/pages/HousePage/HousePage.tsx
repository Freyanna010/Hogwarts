import {
  changeFavoriteStudents,
  chooseStudentById,
  filterStudentsByHouse,
  filterStudentsBySearch,
  sortStudentByName,
} from "@features/studentsSlice";
import { chooseHouseByName } from "@features/hоusesSlice";
import { AppDispatch, RootState } from "@store/store";
import { Col, Row, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import HouseCard from "@components/HouseCard";
import StudentCardList from "@components/StudentCardList";
import debounce from "lodash.debounce";
import { useEffectEvent } from "@hooks/useEffectEvent";

import classes from "./HousePage.module.scss";

const HousePage: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { houseName } = useParams();
  const navigate = useNavigate();

  const {
    filteredStudents,
    allStudents,
    isStudentsLoading,
    errorMessage,
    searchValue,
  } = useSelector((state: RootState) => state.students);
  const { currentHouse } = useSelector((state: RootState) => state.houses);

  useEffect(() => {
    if (allStudents.length > 0 && houseName) {
      dispatch(filterStudentsByHouse(houseName));
      dispatch(chooseHouseByName(houseName));
    }
  }, [dispatch, houseName, allStudents]);

  const handleLikeStudentCard = (studentId: string) =>
    // TODO: 5️⃣changeFavoriteStudents
    dispatch(changeFavoriteStudents(studentId));
  const handleStudentCardClick = (studentId: string) => {
    navigate(`/Hogwarts/students/${studentId}`);
    dispatch(chooseStudentById(studentId));
  };
  const handleSortStudentByName = (direction: "asc" | "desc" | "none") =>
    dispatch(sortStudentByName(direction));

  const debouncedChangeSearch = useEffectEvent(
    debounce((value: string) => {
      dispatch(filterStudentsBySearch(value));
    }, 500),
  );
  const handleChangeSearch = (value: string) => {
    debouncedChangeSearch(value);
  };

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
          {/* TODO: 2️⃣ StudentCardList */}
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
