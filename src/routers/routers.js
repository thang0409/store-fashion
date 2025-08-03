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
    },
    {
        path: '/product/:id',
        components: lazy(() => import('@pages/DetailProduct/DetailProduct'))
    }
];

export default router;
