import StudentInfoCard from "@components/StudentInfoCard";
import { RootState } from "@store/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const StudentPage = () => {
  const { currentStudent } = useSelector((state: RootState) => state.students);

  useEffect(() => {
    console.log(currentStudent);
  }, [currentStudent]);

  //TODO: передать пропсы
  return (
    <>
      <StudentInfoCard />
    </>
  );
};

export default StudentPage;
