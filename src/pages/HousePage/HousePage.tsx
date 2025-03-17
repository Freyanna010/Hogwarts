import classes from "./HousePage.module.scss";
import {
  addFavoriteStudents,
  chooseStudentById,
  deleteStudent,
  filterStudentsByHouse,
  filterStudentsBySearch,
  sortStudentByName,
} from "@features/studentsSlice";
import { chooseHouseByName } from "@features/hоusesSlice";
import { AppDispatch, RootState } from "@store/store";
import { Col, Row, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import HouseCard from "@components/HouseCard";
import StudentCardList from "@components/StudentCardList";
import debounce from "lodash.debounce";
import { useEffectEvent } from "@hooks/useEffectEvent";

const HousePage: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { houseName } = useParams();
  const navigate = useNavigate();

  const { houseStudents, allStudents, isStudentsLoading, errorMessage } =
    useSelector((state: RootState) => state.students);
  const { currentHouse } = useSelector((state: RootState) => state.houses);

  useEffect(() => {
    if (allStudents.length > 0 && houseName) {
      dispatch(filterStudentsByHouse(houseName));
      dispatch(chooseHouseByName(houseName));
    }
  }, [dispatch, houseName, allStudents]);

  const handleLikeStudentCard = (studentId: string) =>
    dispatch(addFavoriteStudents(studentId));

  const handleDeleteStudentCard = (studentId: string) =>
    dispatch(deleteStudent(studentId));

  const handleStudentCardClick = (studentId: string) => {
    navigate(`/students/${studentId}`);
    dispatch(chooseStudentById(studentId));
  };

  const handleSortStudentByName = (direction: "a-z" | "z-a") =>
    dispatch(sortStudentByName(direction));


  const [searchInputValue, setSearchInputValue] = useState<string>("");

  const handleOnChangeSearch = (value: string) => {
    setSearchInputValue(value);
  };
  const debouncedSearch = useEffectEvent(
    debounce((value: string) => {
      if (value !== "") {
        dispatch(filterStudentsBySearch(value));
      }
    }, 500)
  );

useEffect(() => {
  debouncedSearch(searchInputValue);

  return () => {
    debouncedSearch.cancel();
  };
}, [searchInputValue]);

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
            onDeleteClicK={handleDeleteStudentCard}
            onCardClick={handleStudentCardClick}
            onSortClick={handleSortStudentByName}
            onSearchChange={handleOnChangeSearch}
            students={houseStudents}
            className={classes.studentContainer}
          />
        </Col>
      </Row>
    </>
  );
};

export default HousePage;
