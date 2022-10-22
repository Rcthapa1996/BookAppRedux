import { Paper } from "@mui/material";
import { useDispatch } from "react-redux";

export default function RecipeReviewCard({ name, id }) {
  const dispatch = useDispatch();

  const cardClickHandler = () => {
    dispatch({ type: "ADD_TODO", id: id, text: name, complete: true });
  };
  return (
    <Paper onClick={cardClickHandler} sx={{ width: "200px" }}>
      {name}
    </Paper>
  );
}
