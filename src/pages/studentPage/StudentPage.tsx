import StudentInfoCard from "@components/StudentInfoCard";
import { AppDispatch, RootState } from "@store/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const StudentPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { currentStudent } = useSelector((state: RootState) => state.students);

  useEffect(() => {
    console.log(currentStudent);
  }, [dispatch]);

  //TODO: передать пропсы
  return (
    <>
      <StudentInfoCard />
    </>
  );
};

export default StudentPage;
