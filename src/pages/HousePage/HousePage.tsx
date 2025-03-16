import StudentCard from "@components/StudentCard";
import classes from "./HousePage.module.scss";
import {
  addFavoriteStudents,
  chooseStudentById,
  deleteStudent,
  filterStudentsByHouse,
} from "@features/studentsSlice";
import { chooseHouseByName } from "@features/hоusesSlice";
import { AppDispatch, RootState } from "@store/store";
import { Col, Row, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import HouseCard from "@components/HouseCard";

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

  const handleLikeStudent = (studentId: string) =>
    dispatch(addFavoriteStudents(studentId));

  const handleDeleteStudent = (studentId: string) =>
    dispatch(deleteStudent(studentId));

  const handleCardClick = (studentId: string) => {
    navigate(`/students/${studentId}`);
    dispatch(chooseStudentById(studentId));
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
          <div className={classes.cardList}>
            <Row>
              <Row>Sort name: </Row>
            </Row>
            <Row gutter={[24, 24]} justify="start">
              {/* TODO: вынести в компонент cardList? */}
              {houseStudents.map((student) => (
                <Col key={student.id} xs={24} sm={24} md={8} lg={8} xl={8}>
                  <StudentCard
                    student={student}
                    onLikeClick={handleLikeStudent}
                    onDeleteClick={handleDeleteStudent}
                    onCardClick={handleCardClick}
                  />
                </Col>
              ))}
            </Row>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default HousePage;
