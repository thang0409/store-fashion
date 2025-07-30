import { lazy } from 'react';

const router = [
    {
        path: '/',
        components: lazy(() => import('@components/HomePage/HomePage'))
    }
];

export default router;
