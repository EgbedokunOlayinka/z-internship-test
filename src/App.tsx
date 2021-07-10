import { useQuery } from "react-query";
import Loading from "./components/Loading";
import { Container } from "@chakra-ui/react";
import Error from "./components/Error";
import CustomButton from "./components/CustomButton";
import FoodItemGroup from "./components/FoodItemGroup";

export type FoodItemType = {
  description: string;
  id: string;
  ratings: number;
  price: string;
  strMeal: string;
  strMealThumb: string;
  title: string;
};

interface ReturnedData {
  status: number;
  data: {
    meals: FoodItemType[];
  };
}

const getData = async (): Promise<ReturnedData> =>
  await (await fetch("https://asm-dev-api.herokuapp.com/api/v1/food")).json();

const App = () => {
  const { data, isLoading, error } = useQuery<ReturnedData>(
    "products",
    getData
  );

  if (isLoading) return <Loading />;

  if (error) return <Error />;

  return (
    <Container
      maxW={["container.md", null, null, "container.lg"]}
      minH="100vh"
      w="full"
    >
      <FoodItemGroup data={data.data.meals} />
      <CustomButton />
    </Container>
  );
};

export default App;
