import { Box, Heading, Text } from "@chakra-ui/react";

type AchievementBlockProps = {
  title: string;
  body: string;
};

export const AchievementBlock: React.FC<AchievementBlockProps> = ({
  title,
  body,
}) => {
  return (
    <Box
      border="1px solid"
      borderColor="gray.200"
      borderRadius="md"
      padding={4}
      minW="100px"
    >
      <Heading size="lg">{title}</Heading>
      <Text>{body}</Text>
    </Box>
  );
};
