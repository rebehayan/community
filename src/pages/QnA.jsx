import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Molecules/Button";
import useUpdateList from "../util/useUpdateList";
import Table from "../components/Molecules/Table";
import Badge from "../components/Molecules/Badge";

const tableColmns = [
  { th: "No.", key: "no", width: "10rem" },
  { th: "제목", key: "title", width: "" },
  { th: "카테고리", key: "category", width: "20rem" },
  { th: "작성일", key: "date", width: "15rem" },
];

export default function QnAa() {
  const navigate = useNavigate();

  const { data, error, loading } = useUpdateList("qna");

  const handleWrite = () => {
    navigate("/qna/write");
  };

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생: {error.message}</div>;

  return (
    <>
      <div className="text-base">Q&A</div>
      <Table style="type1 mt30" caption="All Topics" colmns={tableColmns}>
        {data.map(({ id, title, category, created_at }) => (
          <tr key={id}>
            <td>{id}</td>
            <td>
              <Link to={`/topicview/${id}`}>{title}</Link>
            </td>
            <td>
              <Badge color="white-outline">{category}</Badge>
            </td>
            <td>{new Date(created_at).toLocaleDateString()}</td>
          </tr>
        ))}
      </Table>
      <div className="align right mt20">
        <Button onClick={handleWrite} color="primary" size="base">
          글쓰기
        </Button>
      </div>
    </>
  );
}
