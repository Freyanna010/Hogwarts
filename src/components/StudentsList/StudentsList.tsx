// import { Col } from "antd";
// import { FC } from "react";

// import StudentCard from "../StudentCard";
// import avatar from "@assets/hogAvatar.webp";
// import { Student } from "@types";

// type Props = {
//   onLike: (studentId: string) => void;
//   onDelete: (studentId: string) => void;
//   onCardClick: (studentId: string) => void;
//   studentsLoading?: boolean;
//   students: Student[];
// };

// const StudentsList: FC<Props> = ({ onLike, onDelete, students, onCardClick }) => (
//   <>
//     {students.map(({id, image, name, house}) => (
//       <Col key={id} xs={24} sm={24} md={8} lg={8} xl={8}>
//         <StudentCard
//           id={id}
//           image={image || avatar}
//           name={name}
//           house={house || "Unknown"}
//           onLike={() => onLike(id)}
//           onDelete={() => onDelete(id)}
//           onCardClick ={() => onCardClick(id)}
//         />
//       </Col>
//     ))}
//   </>
// );
// export default StudentsList;
