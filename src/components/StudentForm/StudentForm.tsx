import { FC } from "react";
import {
  Button,
  DatePicker,
  Form,
  FormProps,
  Input,
  Select,
  Upload,
  UploadFile,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import BgCard from "@components/ui/BgCard";
import { FieldType } from "@types";

import classes from "./StudentForm.module.scss";

// TODO: вынести
interface StudentFormProps {
  fileList: UploadFile[];
  onFileChange: (info: { fileList: UploadFile[] }) => void;
  onSubmit: FormProps<FieldType>["onFinish"];
  onError: FormProps<FieldType>["onFinishFailed"];
}

const StudentForm: FC<StudentFormProps> = ({
  fileList,
  onFileChange,
  onSubmit,
  onError,
}) => {
  const { Option } = Select;

  return (
    <BgCard className={classes.bgGard}>
      <Form
        name="student"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 20 }}
        style={{ maxWidth: 800, marginTop: 16 }}
        initialValues={{ remember: true }}
        onFinish={onSubmit}
        onFinishFailed={onError}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input name!" }]}
        >
          <Input className={classes.form} />
        </Form.Item>

        <Form.Item label="Date of birth" name="dateOfBirth">
          <DatePicker className={classes.form} />
        </Form.Item>

        <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
          {/* TODO: стили селекшн */}
          <Select placeholder="Gender" allowClear className={classes.form}>
            <Option value="male">male</Option>
            <Option value="female">female</Option>
          </Select>
        </Form.Item>

        <Form.Item name="house" label="House" rules={[{ required: true }]}>
          {/* TODO: стили селекшн */}
          <Select
            placeholder="choose a house"
            allowClear
            className={classes.form}
          >
            <Option value="Gryffindor">Gryffindor</Option>
            <Option value="Slytherin">Slytherin</Option>
            <Option value="Ravenclaw">Ravenclaw</Option>
            <Option value="Hufflepuff">Hufflepuff</Option>
          </Select>
        </Form.Item>

        <Form.Item<FieldType>
          label="Patronus"
          name="patronus"
          rules={[{ required: false }]}
        >
          <Input className={classes.form} />
        </Form.Item>

        <Form.Item
          name="fileList"
          valuePropName="fileList"
          getValueFromEvent={(e) => e?.fileList}
          label="Add photo"
        >
          <Upload
            listType="picture-card"
            fileList={fileList}
            onChange={onFileChange}
            beforeUpload={() => false}
            className={classes.upload}
          >
            <button className={classes.uploadButton} type="button">
              <PlusOutlined />
              <div>Photo</div>
            </button>
          </Upload>
        </Form.Item>

        <Form.Item label={null}>
          <Button
            type="primary"
            htmlType="submit"
            className={classes.buttonSubmit}
          >
            Create student
          </Button>
        </Form.Item>
      </Form>
    </BgCard>
  );
};

export default StudentForm;
