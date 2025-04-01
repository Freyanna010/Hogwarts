import { Col, Input, Row } from "antd";
import { ChangeEvent, FC } from "react";
import { SearchOutlined } from "@ant-design/icons";
import SortingButton from "@components/ui/SortingButton";
import { Direction } from "@components/ui/SortingButton/SortingВutton.types";

import StudentCard from "../StudentCard";
import classes from "./StudentCardList.module.scss";
import { StudentCardListProps } from "./StudentCardList.types";

const StudentCardList: FC<StudentCardListProps> = (props) => {
  const {
    onLikeClicK,
    students,
    onCardClick,
    onSortClick,
    onSearchChange,
    className,
    searchValue = "",
  } = props;

  const handleSortChange = (direction: Direction) => {
    onSortClick(direction);
  };

  const handleOnChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    onSearchChange(value);
  };

  return (
    <div className={className}>
      <Row className={classes.searchCardListRow}>
        <Input
          size="large"
          placeholder="search student"
          prefix={<SearchOutlined />}
          onChange={handleOnChangeSearch}
          className={classes.searchInput}
          value={searchValue}
        />
        <Row>
          Sort name:
          <SortingButton onSortClick={handleSortChange} />
        </Row>
      </Row>

      <Row gutter={[24, 24]} justify="start">
        {students.map((student) => (
          <Col key={student.id} xs={24} sm={24} md={8} lg={8} xl={8}>
            <StudentCard
              student={student}
              type="favoritePage"
              onLikeClick={onLikeClicK}
              onCardClick={onCardClick}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default StudentCardList;
