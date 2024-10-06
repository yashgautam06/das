// import { Box } from "@mui/material";
// import Header from "../../components/Header";
// import PieChart from "../../components/PieChart";

// const Pie = () => {
//   return (
//     <Box m="20px">
//       <Header title="Pie Chart" subtitle="Simple Pie Chart" />
//       <Box height="75vh">
//         <PieChart />
//       </Box>
//     </Box>
//   );
// };

// export default Pie;


import { Box, useMediaQuery } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

const Pie = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <Box m={isMobile ? "10px" : "20px"}>
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height={isMobile ? "50vh" : "75vh"}>
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;
