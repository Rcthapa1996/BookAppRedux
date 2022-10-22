// Components
import TopFilter from "./topFilter";
import SideFilter from "./sideFilter";
import Contents from "./contents";
import CartSummary from "./cartSummary";
import { Grid } from "@mui/material";

// Styles
import "./Button.css";
import "../../../tailwind-pre-build.css";

export default function Body() {
  return (
    <div>
      <TopFilter />
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <SideFilter />
        </Grid>
        <Grid item xs={6}>
          <Contents />
        </Grid>
        <Grid item xs={3}>
          <CartSummary />
        </Grid>
      </Grid>
    </div>
  );
}
