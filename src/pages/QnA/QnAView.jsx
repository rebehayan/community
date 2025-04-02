import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useUpdateRow from "../../util/useUpdateRow";
import Badge from "../../components/Molecules/Badge";
import Block from "../../components/Molecules/Block";
import Text from "../../components/Atom/Text";
import { formatToKoreanDate } from "../../util/dateFormatter";
import MDViewer from "../../components/Molecules/MDViewer";
import Button from "../../components/Molecules/Button";

export default function QnAView() {
  const { id } = useParams(); // URL에서 id 가져오기
  const { data, error, loading } = useUpdateRow("qna", id);
  const navigate = useNavigate();

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생: {error.message}</div>;

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
      {data.map(({ category, created_at, description, title, id }) => (
        <div key={id}>
          <div className="align both vm mb20">
            <Text tag="h2" size="lg" className="align vm">
              {title}
              <Badge color="green">{category}</Badge>
            </Text>
            <Text size="xs">{formatToKoreanDate(created_at)}</Text>
          </div>

          <Block>
            <MDViewer height={"auto"} markdown={description} />
          </Block>
        </div>
      ))}
      <div className="align right mt30">
        <Button color="primary" size="base" onClick={handleBack}>
          목록
        </Button>
      </div>
    </div>
  );
}
