import { Button, Flex, Heading, Text } from "@chakra-ui/react";

type ServiceBlockProps = {
  name: string;
  price: string;
};

export const ServiceBlock: React.FC<ServiceBlockProps> = ({ name, price }) => (
  <Flex
    direction="column"
    borderWidth="1px"
    borderColor="gray.200"
    borderRadius="md"
    padding={6}
    minW="200px"
    gapY={3}
  >
    <Heading size="md">{name}</Heading>
    <Text fontSize="xl" color="green.600" fontWeight="bold">
      {price}
    </Text>
    <Button
      size="sm"
      onClick={() => {
        // tracker.event("click", `service_${service.id}`);
      }}
    >
      Заказать
    </Button>
  </Flex>
);
