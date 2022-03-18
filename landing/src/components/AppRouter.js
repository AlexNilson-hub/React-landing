// Закинем все страницы сюда (ссылки)

import React from 'react';
import {Route, Routes} from "react-router-dom";
import {CREATE_NFT_ROUTE, HOME_ROUTE, PERSONAL_ACCOUNT_ROUTE,
    STATISTICS_ROUTE, SUPPORT_ROUTE} from "../utils/consts";
import HomePage from "../pages/HomePage";
import StatisticsPage from "../pages/StatisticsPage";
import SupportPage from "../pages/SupportPage";
import CreateNFTPage from "../pages/CreateNFTPage";
import PersonalAccountPage from "../pages/PersonalAccountPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path={HOME_ROUTE} element={<HomePage/>} exact />
            <Route path={STATISTICS_ROUTE} element={<StatisticsPage/>} exact />
            <Route path={SUPPORT_ROUTE} element={<SupportPage/>} exact />
            <Route path={CREATE_NFT_ROUTE} element={<CreateNFTPage/>} exact />
            <Route path={PERSONAL_ACCOUNT_ROUTE} element={<PersonalAccountPage/>} exact />
        </Routes>
    );
};

export default AppRouter;
