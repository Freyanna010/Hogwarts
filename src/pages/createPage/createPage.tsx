import { useState } from "react";
import { UploadFile, FormProps } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { AppDispatch } from "@store/store";
import { addNewStudent } from "@features/studentsSlice";
import { FieldType } from "@types";
import StudentForm from "@components/StudentForm";

const CreatePage = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleChange = (info: { fileList: UploadFile[] }): void => {
    const updatedFiles: UploadFile[] = [];

    info.fileList.forEach((file: UploadFile) => {
      if (file.originFileObj) {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => {
          const newFile: UploadFile = {
            uid: file.uid,
            name: file.name,
            status: "done",
            thumbUrl: reader.result as string,
          };
          updatedFiles.push(newFile);
          if (updatedFiles.length === info.fileList.length) {
            setFileList(updatedFiles);
          }
        };
      } else {
        updatedFiles.push(file);
      }
    });
  };

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    const formatted = Object.entries(values)
      .filter(([key]) => key !== "fileList")
      .map(([key, value]) => {
        if (key === "dateOfBirth") {
          return [key, value.format("DD-MM-YYYY")];
        }
        return [key, value];
      })
      .reduce((acc, [key, value]) => {
        acc[key] = value;
        return acc;
        // TODO: исправить
      }, {} as any);

    formatted.id = uuidv4();

    if (fileList.length > 0) {
      formatted.image = fileList[0].thumbUrl;
    }

    dispatch(addNewStudent(formatted));
    navigate(`/Hogwarts/house/${values.house}`);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo,
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <StudentForm
      fileList={fileList}
      onFileChange={handleChange}
      onSubmit={onFinish}
      onError={onFinishFailed}
    />
  );
};

export default CreatePage;
