import React, { useState, useEffect } from "react";
import {
  Heading,
  VStack,
  Input,
  Textarea,
  Button,
  Flex,
} from "@chakra-ui/react";
import { metricaTracker } from "../../utils/metrica-tracker";

export const ContactsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    metricaTracker.sendPageViewEvent();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // tracker.event("form_submit", "contact_form", JSON.stringify(formData));
    alert("Сообщение отправлено!");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Flex flexDirection="column" textAlign="center" padding={8}>
      <Heading size="2xl" fontWeight="bold" marginBottom={6}>
        Свяжитесь с нами
      </Heading>
      <form onSubmit={handleSubmit}>
        <VStack gapY={4} maxW="400px" marginX="auto">
          <Input
            name="name"
            placeholder="Ваше имя"
            value={formData.name}
            onChange={handleChange}
            size="lg"
            required
          />
          <Input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            size="lg"
            required
          />
          <Textarea
            name="message"
            placeholder="Сообщение"
            value={formData.message}
            onChange={handleChange}
            size="lg"
            minH="100px"
            required
          />
          <Button type="submit" colorScheme="blue" size="lg" width="100%">
            Отправить
          </Button>
        </VStack>
      </form>
    </Flex>
  );
};
