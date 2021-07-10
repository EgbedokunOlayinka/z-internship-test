import { Spinner, Center } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Center h="100vh" w="100%">
      <Spinner size="xl" />
    </Center>
  );
};

export default Loading;
