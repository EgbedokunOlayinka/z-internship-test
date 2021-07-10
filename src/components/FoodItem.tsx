import { Box, Text, Flex, Center, IconButton, Image } from "@chakra-ui/react";
import { FoodItemType } from "../App";
import Rating from "./Rating";
import { AddIcon } from "@chakra-ui/icons";

type ComponentProps = {
  meal: FoodItemType;
};

const FoodItem = ({ meal }: ComponentProps) => {
  return (
    <Box
      mx="auto"
      w="100%"
      h="450px"
      maxW="320px"
      borderTopRightRadius="13px"
      borderBottomLeftRadius="13px"
      position="relative"
      boxShadow='xl'
    >
      <Box h="50%">
        <Image
          objectFit="cover"
          h="full"
          w="full"
          borderBottomLeftRadius="13px"
          borderTopRightRadius="13px"
          src={meal.strMealThumb}
          alt={meal.strMeal}
        />
      </Box>
      <Box px={2} pt={6}>
        <Flex align="center" justify="space-between">
          <Text color="mainDark" textStyle="header">
            {meal.title}
          </Text>
          <Text color="mainDark" textStyle="header">
            {meal.price}
          </Text>
        </Flex>
        <Text color="subDark" textStyle="sub">
          {meal.strMeal}
        </Text>
        <Text color="subDark" textStyle="body" noOfLines={3} mt={4}>
          {meal.description}
        </Text>
        <Box mt={10} ml={4}>
          <Rating rating={meal.ratings} />
        </Box>
        <Center
          position="absolute"
          backgroundColor="themeColor"
          h="60px"
          w="70px"
          right="0px"
          bottom="0px"
          borderTopLeftRadius="13px"
        >
          <IconButton
            h="full"
            w="full"
            borderRadius="0px"
            borderTopLeftRadius="13px"
            aria-label="Add Meal"
            backgroundColor="transparent"
            icon={<AddIcon color="white" h="25px" w="25px" />}
          />
        </Center>
      </Box>
    </Box>
  );
};

export default FoodItem;
