import React, { useEffect } from "react";
import { Heading, Text, Button, Flex } from "@chakra-ui/react";
import { metricaTracker } from "../../utils/metrica-tracker";

export const HomePage: React.FC = () => {
  useEffect(() => {
    metricaTracker.sendPageViewEvent();
  }, []);

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      padding={8}
    >
      <Heading size="2xl" fontWeight="bold" marginBottom={4}>
        Добро пожаловать!
      </Heading>
      <Text fontSize="lg" marginBottom={6}>
        Это главная страница нашего лендинга.
      </Text>
      <Button
        onClick={() => {
          // tracker.event("click", "hero_button");
        }}
      >
        Узнать больше
      </Button>
    </Flex>
  );
};
