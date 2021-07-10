import { Center, Button } from "@chakra-ui/react";

const CustomButton = () => {
  return (
    <Center mt={12} mb={8}>
      <Button
        backgroundColor="themeColor"
        color="white"
        borderRadius="full"
        px={8}
        _hover={{
          opacity: "0.75",
        }}
      >
        Learn More
      </Button>
    </Center>
  );
};

export default CustomButton;
