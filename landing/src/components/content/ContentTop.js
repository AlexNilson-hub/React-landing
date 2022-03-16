import * as React from 'react';
// import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

import Button from '@mui/material/Button';
import {Card, CardActions, CardContent} from "@mui/material";
import Typography from "@mui/material/Typography";
import ContentTopCard from "./ContentTopCard";


export default function ContentTop() {
    return (
        <Container fixed>
            <Box sx={{flexGrow: 1}}>
                <Grid container spacing={2} sx={{justifyContent: "center", mt: 15,}}>
                    <Grid item xs={6}>
                        <Card elevation={0}>
                            <CardContent sx={{width: 'auto', height: 250}}>
                                <Typography gutterBottom variant="h5" component="div">
                                    Открывайте, собирайте <br/>
                                    и продавайте необычные НФТ
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    NFT (англ. Non-fungible token, невзаимозаменяемый токен)
                                    — сертификат на владение уникальным цифровым активом.
                                    Это может быть фотография, скриншот, рисунок, видео или GIF-ка.
                                    Они размещаются на блокчейне, их покупают и продают, как произведения искусства
                                    на аукционе.
                                    В нашем маркетплейсе вы можете покупать и продавать NFT,
                                    посмотреть их торговую историю и изучать статистику.
                                </Typography><br/>
                                <Link href="#" underline="always" color="inherit">
                                    {'Почитать подробнее'}
                                </Link>
                            </CardContent>
                            <CardActions>
                                <Button variant="" color="inherit" size="small">Смотреть коллекции</Button>
                                <Button variant="" color="inherit" size="small">Создать НФТ</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid sx={{width: 370, height: 200}}>
                        <ContentTopCard/>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}