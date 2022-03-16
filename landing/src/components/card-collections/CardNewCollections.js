import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import Typography from "@mui/material/Typography";
import {Card, CardContent, Skeleton} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';

export default function CardNewCollections() {
    return (
        <Box xs={1} sx={{width: 'auto', height: 'auto', textAlign: 'left', mt: 15}}>
            <Typography gutterBottom variant="h5" component="div">
                Сейчас в тренде
            </Typography>
            <ImageList cols={3} gap={12} sx={{width: 'auto', height: 'auto', textAlign: 'left'}}>
                {itemData.map((item) => (
                    <Card key={item.img}>
                        {/*<img*/}
                        {/*    src={`${item.img}?w=370&fit=crop&auto=format`}*/}
                        {/*    srcSet={`${item.img}?w=370&fit=crop&auto=format&dpr=2 2x`}*/}
                        {/*    alt={item.title}*/}
                        {/*    loading="lazy"*/}
                        {/*/>*/}
                        <Skeleton
                            variant="rectangular"
                            width={'auto'}
                            height={470}
                        />
                        <CardContent>
                            <Typography>{item.title}</Typography>
                            <Typography sx={{lineHeight: 2, whiteSpace: 'nowrap', borderBottom: 1}}>
                                {item.description} &ensp; {item.price}</Typography>
                            <Button sx={{borderRadius: 5, mr: 12, mt: 2 }} color="inherit" variant="outlined">
                                Купить</Button>
                            <IconButton sx={{mt: 2 }} aria-label="fingerprint" color="inherit">
                                <FavoriteTwoToneIcon/><h6>{item.like}</h6>
                            </IconButton>
                        </CardContent>
                    </Card>
                ))}
            </ImageList>
        </Box>
    );
}

const itemData = [
    {
        img: '',
        title: 'Полосатые коты',
        description: 'Серый полосатый кот 1',
        price: '200 ₽',
        like: '512',
    },
    {
        img: '',
        title: 'Полосатые коты',
        description: 'Серый полосатый кот 1',
        price: '200 ₽',
        like: '512',
    },
    {
        img: '',
        title: 'Полосатые коты',
        description: 'Серый полосатый кот 1',
        price: '200 ₽',
        like: '512',
    },
    {
        img: '',
        title: 'Полосатые коты',
        description: 'Серый полосатый кот 1',
        price: '200 ₽',
        like: '512',
    },
    {
        img: '',
        title: 'Полосатые коты',
        description: 'Серый полосатый кот 1',
        price: '200 ₽',
        like: '512',
    },
    {
        img: '',
        title: 'Полосатые коты',
        description: 'Серый полосатый кот 1',
        price: '200 ₽',
        like: '512',
    },



];