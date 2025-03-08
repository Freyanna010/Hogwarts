import StudentInfoCard from "@components/StudentInfoCard";
import { useEffect } from "react";


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
