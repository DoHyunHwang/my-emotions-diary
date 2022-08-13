import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get("id");
  const mode = searchParams.get("mode");
  const who = searchParams.get("who");

  console.log("id: ", id);
  console.log("mode: ", mode);
  console.log("who: ", who);

  return (
    <div>
      <h1>Edit</h1>
      <button onClick={() => setSearchParams({ who: "dohyun" })}>
        QS 바꾸기
      </button>
      <button
        onClick={() => {
          navigate("/home");
        }}
      >
        Home으로 가기
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로가기
      </button>
    </div>
  );
};
export default Edit;
