import { Button, Col, Input, Row } from "antd";
import { ChangeEvent, FC, useState } from "react";
import StudentCard from "../StudentCard";
import { DownOutlined, SearchOutlined, UpOutlined } from "@ant-design/icons";
import classes from "./StudentCardList.module.scss";
import { StudentCardListProps } from "./StudentCardList.types";

const StudentCardList: FC<StudentCardListProps> = (props) => {
  const {
    onLikeClicK,
    onDeleteClicK,
    students,
    onCardClick,
    onSortClick,
    onSearchChange,
    className,
  } = props;

  const [searchInputValue, setSearchInputValue] = useState<string> ("")

  const handleOnDownOutlined = () => onSortClick("a-z");
  const handleOnUpOutlined = () => onSortClick("z-a");
  const handleOnChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchInputValue(value)
    onSearchChange(searchInputValue);
  };

  return (
    <div className={className} style={{ maxWidth: "100%", minHeight: "400px" }}>
      <Row className={classes.searchCardListRow}>
        <Input
          size="large"
          placeholder="search student"
          prefix={<SearchOutlined />}
          value={searchInputValue}
          onChange={handleOnChangeSearch}
        />
        <Row>
          Sort name:
          <Button
            type="text"
            onClick={handleOnDownOutlined}
            // TODO: стили
            icon={<DownOutlined style={{ color: "#fff" }} />}
          />
          <Button
            type="text"
            onClick={handleOnUpOutlined}
            icon={<UpOutlined style={{ color: "#fff" }} />}
          />
        </Row>
      </Row>

      <Row gutter={[24, 24]} justify="start">
        {students.map((student) => (
          <Col key={student.id} xs={24} sm={24} md={8} lg={8} xl={8}>
            <StudentCard
              student={student}
              onLikeClick={onLikeClicK}
              onDeleteClick={onDeleteClicK}
              onCardClick={onCardClick}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default StudentCardList;
