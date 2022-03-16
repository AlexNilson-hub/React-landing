import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import {styled} from '@mui/material/styles';
import AvatarUser from "../AvatarUser";

const Image = styled('img')({
    width: '100%',
});

export default function ContentTopCard() {
    return (
        <Card elevation={10}>
            <Image
                src="https://oir.mobi/uploads/posts/2019-12/1575753116_12-15.jpg"
                alt=""
            />
            <CardContent sx={{width: 370, height: 120}}>
                <Typography gutterBottom variant="h5" component="div">
                    Закат над рекой
                </Typography>
                <AvatarUser/>
            </CardContent>
        </Card>
    );
}