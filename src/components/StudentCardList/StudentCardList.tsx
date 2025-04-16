import { Col, Input, Row } from "antd";
import { ChangeEvent, FC, memo } from "react";
import { SearchOutlined } from "@ant-design/icons";
import SortingButton from "@components/ui/SortingButton";
import { Direction } from "@components/ui/SortingButton/SortingВutton.types";

import StudentCard from "../StudentCard";
import classes from "./StudentCardList.module.scss";
import { StudentCardListProps } from "./StudentCardList.types";

const StudentCardList: FC<StudentCardListProps> = memo((props) => {
  const {
    students,
    onLikeClicK,
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
  // TODO:  вынести стайлы, добавить кастомные флексы грид, переименовать классы
  // TODO:  стили карточек (цвет текста/размер/адаптив)
  return (
    <div className={className}>
      <div className={classes.searchRow}>
        <Input
          size="large"
          placeholder="search student"
          prefix={<SearchOutlined />}
          onChange={handleOnChangeSearch}
          className={classes.searchInput}
          value={searchValue}
        />
        <div className={classes.sortButtonRow}>
          <p className={classes.sortButtonTitle}>Sort name:</p>
          {/* TODO: поправить стили */}
          <SortingButton onSortClick={handleSortChange} />
        </div>
      </div>

      <Row gutter={[24, 24]} justify="start">
        {students.map((student) => (
          <Col key={student.id} xs={24} sm={24} md={8} lg={8} xl={8}>
            <StudentCard
              student={student}
              type="housePage"
              onLikeClick={onLikeClicK}
              onCardClick={onCardClick}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
});

export default StudentCardList;
