// import * as React from 'react';
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
// import Stack from "@mui/material/Stack";
// import IconButton from "@mui/material/IconButton";
// import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
// import Button from "@mui/material/Button";
//
//
// function createData(name, price, rub) {
//     return {name, price, rub};
// }
//
//
//
// const rows = [
//     createData('Полосатые коты'),
//     createData('Серый полосатый кот 1', 200, '₽'),
//
// ];
//
// export default function TableNewColl() {
//     return (
//         <Box>
//             <Typography >Jjjjjjj</Typography>
//             <Grid sx={{minWidth: 370}} aria-label="сейчас в тренде">
//                 {rows.map((row) => (
//                     <Stack direction="row"
//                            spacing={1}
//                            key={row.name}
//                     >
//                         <Typography  scope="row">{row.name}</Typography>
//                         <Typography align="right">{row.price}</Typography>
//                         <Typography align="right">{row.rub}</Typography>
//                     </Stack>
//                 ))}
//             </Grid>
//         </Box>
//     );
// }