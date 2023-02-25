import { Box, Typography } from "@mui/material";
import { FC } from "react";

type itemNameType = {
  text: string;
};

export const ItemDataText: FC<itemNameType> = (props) => {
  const { text } = props;
  return (
    <Box>
      <Typography fontSize={15}>{text}</Typography>
    </Box>
  );
};
