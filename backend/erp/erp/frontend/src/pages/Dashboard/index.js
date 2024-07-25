import * as React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Title } from 'react-admin';
import { ReactQueryDevtools } from 'react-query/devtools';
const Dashboard  = () => (
    <Card>
        <Title title="Welcome to the administration" />
        <CardContent>Put your Thing Together</CardContent>
        <ReactQueryDevtools initialIsOpen={false} />
    </Card>
);

export default Dashboard;