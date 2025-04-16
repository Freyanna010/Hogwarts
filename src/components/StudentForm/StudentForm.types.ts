import { FormProps, UploadFile } from "antd";
import dayjs from "dayjs";

export interface FieldType {
  name: string;
  dateOfBirth?: dayjs.Dayjs;
  gender: string;
  house: string;
  patronus?: string;
  fileList?: UploadFile[];
}

export interface StudentFormProps {
  fileList: UploadFile[];
  onFileChange: (info: { fileList: UploadFile[] }) => void;
  onSubmit: FormProps<FieldType>["onFinish"];
  onError: FormProps<FieldType>["onFinishFailed"];
}
