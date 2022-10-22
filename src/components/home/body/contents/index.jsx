import { useState } from "react";
import CardItem from "./cardItem";
import { Grid } from "@mui/material";
import RecipeReviewCard from "./cardItem/recipeReviewCard.jsx";

export default function Contents() {
  const [cardDetails, setCardDetails] = useState(
    Array(5)
      .fill("Card ")
      .map((el, index) => el + index)
  );
  console.log(cardDetails);
  return (
    <div style={{ overflowX: "scroll", height: `calc(90vh)` }}>
      <Grid container spacing={2} alignContent="center">
        {cardDetails.map((details, index) => (
          <Grid item>
            <CardItem
              key={index}
              data={{
                card: details,
                id: index,
                url: `https://picsum.photos/id/${index}/150/150`
              }}
            />
            {/* <RecipeReviewCard key={index} name={details} id={index} /> */}
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
