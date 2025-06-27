import { Col, Input, Row } from "antd";
import { ChangeEvent, FC, memo } from "react";
import SortingButton from "@shared/ui/SortingButton";
import { Direction } from "@shared/ui/SortingButton/SortingВutton.types";

import StudentCard from "../StudentCard";
import classes from "./StudentCardList.module.scss";
import { StudentCardListProps } from "./StudentCardList.types";
import SearchInput from "@shared/ui/SearchInput";

const StudentCardList: FC<StudentCardListProps> = memo((props) => {
  const {
    students,
    onCardClick,
    onSortClick,
    onSearchChange,
    className,
    searchValue = "",
    renderActionButton,
  } = props;

  const onSortChangeClick = (direction: Direction) => {
    onSortClick(direction);
  };

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    onSearchChange(value);
  };

  return (
    <div className={className}>
      <div className={classes.searchRow}>
        <SearchInput onChange={onChangeSearch} value={searchValue} />
        <div className={classes.sortButtonRow}>
          <p className={classes.sortButtonTitle}>Sort name:</p>
          <SortingButton onSortClick={onSortChangeClick} />
        </div>
      </div>

      <Row gutter={[24, 24]} justify="start">
        {students.map((student) => {
          return (
            <Col key={student.id} xs={24} sm={24} md={8} lg={8} xl={8}>
              <StudentCard
                student={student}
                onCardClick={onCardClick}
                buttonAction={renderActionButton(student)}
              />
            </Col>
          );
        })}
      </Row>
    </div>
  );
});

export default StudentCardList;
