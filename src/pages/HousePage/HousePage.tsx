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
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import HouseCard from "@components/HouseCard";
import StudentCardList from "@components/StudentCardList";

const HousePage: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { houseName } = useParams();
  const navigate = useNavigate();

  const { houseStudents, allStudents, isStudentsLoading, errorMessage } =
    useSelector((state: RootState) => state.students);
  const { currentHouse } = useSelector((state: RootState) => state.houses);
  // TODO: два диспатча
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

  const handleOnChangeSearch = (value: string) => 
    dispatch(filterStudentsBySearch(value));

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
    return <h1>errorMessage</h1>;
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
            onSearchChange = {handleOnChangeSearch}
            students={houseStudents}

          />
        </Col>
      </Row>
    </>
  );
};

export default HousePage;
