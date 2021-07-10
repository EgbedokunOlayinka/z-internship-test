import { Grid } from "@chakra-ui/react";
import FoodItem from "./FoodItem";
import { FoodItemType } from "../App";

type ComponentProps = {
  data: FoodItemType[];
};

const FoodItemGroup = ({ data }: ComponentProps) => {
  return (
    <Grid
      w="full"
      h="full"
      templateColumns={["1fr", `repeat(auto-fill, minmax(300px, 1fr))`]}
      gap={[6, null, 8]}
      mt={4}
      mb={8}
    >
      {data.map(
        (meal: FoodItemType): JSX.Element => (
          <FoodItem key={meal.id} meal={meal} />
        )
      )}
    </Grid>
  );
};

export default FoodItemGroup;
