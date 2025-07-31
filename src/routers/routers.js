import { lazy } from 'react';

const router = [
    {
        path: '/',
        components: lazy(() => import('@components/HomePage/HomePage'))
    },
    {
        path: '/shop',
        components: lazy(() => import('@pages/OurShop/OurShop'))
    }
];

export default router;
