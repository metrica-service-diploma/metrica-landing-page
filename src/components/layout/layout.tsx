import { Flex, Link as ChakraLink } from "@chakra-ui/react";
import { Outlet, Link as RouterLink } from "react-router-dom";
import { routesList } from "../../constants/routes";

export const Layout = () => (
  <>
    <Flex as="nav" bg="gray.800" p={4} gap={8} justify="center">
      <ChakraLink asChild color="white">
        <RouterLink to={routesList.Home}>Главная</RouterLink>
      </ChakraLink>
      <ChakraLink asChild color="white">
        <RouterLink to={routesList.About}>О нас</RouterLink>
      </ChakraLink>
      <ChakraLink asChild color="white">
        <RouterLink to={routesList.Services}>Услуги</RouterLink>
      </ChakraLink>
      <ChakraLink asChild color="white">
        <RouterLink to={routesList.Contacts}>Контакты</RouterLink>
      </ChakraLink>
    </Flex>
    <Outlet />
  </>
);
