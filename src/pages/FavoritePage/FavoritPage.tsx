
import { LoadingOutlined } from "@ant-design/icons";
import { Col, Row, Spin, Typography } from "antd";
import StudentCardList from "@components/StudentCardList";
import { FC } from "react";
import DeleteButton from "@shared/ui/DeleteButtonAction";

import { useFavoritePage } from "./useFavoritePage";

const FavoritePage: FC = () => {
  const {
    favoriteStudents,
    isStudentsLoading,
    errorMessage,
    handleToggleFavorite,
    handleStudentCardClick,
    handleSortStudentByName,
    handleChangeSearch,
    searchValue,
  } = useFavoritePage();

  if (isStudentsLoading) {
    return <Spin indicator={<LoadingOutlined spin />} size="large" />;
  }

  if (errorMessage) return <h1>{errorMessage}</h1>;

  return (
    <Row gutter={[24, 24]} justify="start">
      <Col span={24}>
        <Typography.Title level={2}>Favorite Students</Typography.Title>
      </Col>

      <Col span={24}>
          <StudentCardList
          onLikeClicK={handleToggleFavorite}
          onCardClick={handleStudentCardClick}
          onSortClick={handleSortStudentByName}
          onSearchChange={handleChangeSearch}
          students={favoriteStudents}
          searchValue={searchValue}
          renderActionButton={(student) =>(
            <DeleteButton
            onClick={(e)=> {
              e.stopPropagation()
                  handleToggleFavorite(student.id);
            }}/>
          )}/>
          

      </Col>
    </Row>
  );
};

export default FavoritePage;
