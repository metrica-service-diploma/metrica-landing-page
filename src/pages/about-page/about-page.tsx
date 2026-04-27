import { useEffect } from "react";
import { Heading, Text, Flex } from "@chakra-ui/react";
import { AchievementBlock } from "../../components/achievement-block";

export const AboutPage = () => {
  useEffect(() => {
    // tracker.pageview("/about");
  }, []);

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      padding={8}
    >
      <Heading size="2xl" fontWeight="bold" marginBottom={6}>
        О нас
      </Heading>
      <Text marginBottom={8}>
        Мы - команда профессионалов, создающая качественные веб-решения.
      </Text>
      <Flex gap={4} justify="center" wrap="wrap">
        <AchievementBlock title="5+" body="лет опыта" />
        <AchievementBlock title="100+" body="проектов" />
        <AchievementBlock title="50+" body="клиентов" />
      </Flex>
    </Flex>
  );
};
