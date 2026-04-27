import { useEffect } from "react";
import { Heading, Flex } from "@chakra-ui/react";
import { ServiceBlock } from "../../components/service-block";

export const ServicesPage = () => {
  useEffect(() => {
    // tracker.pageview("/services");
  }, []);

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      padding={8}
    >
      <Heading size="2xl" fontWeight="bold" marginBottom={6}>
        Наши услуги
      </Heading>
      <Flex gap={8} justify="center" wrap="wrap">
        <ServiceBlock name="Веб-разработка" price="от 500$" />
        <ServiceBlock name="Мобильные приложения" price="от 1000$" />
        <ServiceBlock name="UI/UX дизайн" price="от 300$" />
      </Flex>
    </Flex>
  );
};
