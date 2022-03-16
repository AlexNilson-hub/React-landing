import * as React from 'react';
import Box from '@mui/material/Box';
import ContentTop from "./content/ContentTop";
import ContentMiddleCart from "./content/ContentMiddleCart";
import ContentBottom from "./content/ContentBottom";
import Footer from "./Footer";

export default function MainContent() {
    return (
        <Box
            sx={{
                width: "auto",
                height: 800,
                // backgroundColor: 'primary.dark',
            }}
        >
            <ContentTop/>
            <ContentMiddleCart/>
            <ContentBottom/>
            <Footer/>
        </Box>
    );
}