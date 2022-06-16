import styled from "@emotion/styled";
import { LinearProgress, linearProgressClasses } from "@mui/material";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette?.grey[theme.palette?.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette?.mode === "light" ? "#F5F5F5" : "#479622",
  },
}));
export default BorderLinearProgress;
