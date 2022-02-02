import { Box, Text, Center } from "@chakra-ui/react";
import React from "react";

type MomentBoxProps = {
  header: string;
  children: React.ReactNode;
};

export const MomentBox = ({ header, children }: MomentBoxProps) => {
  return (
    <Box bgColor="red.600" m={2} borderRadius={3} p={2} color={"white"} w={"100%"}>
      <Center fontWeight={"Bold"}>{header}</Center>
      <hr />
      <Text fontFamily={"mono"} whiteSpace={"pre-wrap"}>
        {children}
      </Text>
    </Box>
  );
};
