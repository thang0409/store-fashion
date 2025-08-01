import { lazy } from 'react';

const router = [
    {
        path: '/',
        components: lazy(() => import('@components/HomePage/HomePage'))
    },
    {
        path: '/shop',
        components: lazy(() => import('@pages/OurShop/OurShop'))
    },
    {
        path: '/cart',
        components: lazy(() => import('@pages/Cart/Cart'))
    }
];

export default router;
