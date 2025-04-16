import StudentInfoCard from "@components/StudentInfoCard";
import { RootState } from "@store/store";
import { hogwartsTheme } from "@styles/theme";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import avatar from "@assets/hogAvatar.webp";

const StudentPage = () => {
  const {
    currentStudent,
    isStudentLoading: studentLoading,
    errorMessage: studentsError,
  } = useSelector((state: RootState) => state.students);

  // TODO:  заменить на классы
  const { shadow } = hogwartsTheme.token;

  if (studentLoading) {
    return (
      <Spin
        indicator={
          <LoadingOutlined
            style={{
              fontSize: 60,
              boxShadow: shadow,
              borderRadius: "50%",
            }}
            spin
          />
        }
      />
    );
  }

  if (studentsError) {
    return <div>{studentsError}</div>;
  }

  if (!currentStudent) {
    return <div>No student selected.</div>;
  }

  return <StudentInfoCard student={currentStudent} avatar={avatar} />;
};

export default StudentPage;
