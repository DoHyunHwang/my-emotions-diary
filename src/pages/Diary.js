import { useParams } from "react-router-dom";

const Diary = () => {
  const { id } = useParams();
  console.log("id: ", id);
  return (
    <div>
      <h1>Diary</h1>
    </div>
  );
};
export default Diary;
