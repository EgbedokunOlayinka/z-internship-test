import { Flex } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

type ComponentProps = {
  rating: number;
};

const starArray = Array.from(Array(5).keys());

const Rating = ({ rating }: ComponentProps) => {
  return (
    <Flex>
      {starArray.map((star): JSX.Element =>
        rating >= star + 1 ? (
          <StarIcon w="3" h="3" color="themeColor" />
        ) : (
          <StarIcon w="3" h="3" color="silver" />
        )
      )}
    </Flex>
  );
};

export default Rating;
