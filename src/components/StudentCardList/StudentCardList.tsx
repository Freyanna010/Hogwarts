import { Col, Input, Row } from "antd";
import { ChangeEvent, FC, memo } from "react";
import { SearchOutlined } from "@ant-design/icons";
import SortingButton from "@components/ui/SortingButton";
import { Direction } from "@components/ui/SortingButton/SortingВutton.types";

import StudentCard from "../StudentCard";
import classes from "./StudentCardList.module.scss";
import { StudentCardListProps } from "./StudentCardList.types";
import { useSelector } from "react-redux";
import { RootState } from "@store/store";
import LikeButtonAction from "@shared/ui/LikeButton";

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

  const favoriteIds = useSelector(
    (state: RootState) => state.students.favoriteStudentsId
  );

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
        <Input
          size="large"
          placeholder="search student"
          prefix={<SearchOutlined />}
          onChange={onChangeSearch}
          className={classes.searchInput}
          value={searchValue}
        />
        <div className={classes.sortButtonRow}>
          <p className={classes.sortButtonTitle}>Sort name:</p>
          <SortingButton onSortClick={onSortChangeClick} />
        </div>
      </div>

      <Row gutter={[24, 24]} justify="start">
        {students.map((student) => {
          const isLiked = favoriteIds.includes(student.id);

          return (
            <Col key={student.id} xs={24} sm={24} md={8} lg={8} xl={8}>
              <StudentCard
                student={student}
                onCardClick={onCardClick}
                buttonAction={
                  <LikeButtonAction
                    isLiked={isLiked}
                    onClick={(e) => {
                      e.stopPropagation();
                      onLikeClicK(student.id);
                    }}
                  />
                }
              />
            </Col>
          );
        })}
      </Row>
    </div>
  );
});

export default StudentCardList;
