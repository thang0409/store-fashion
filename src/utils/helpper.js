import { addToCart } from '@/apis/cartService';

export const handleAddProductToCart = (
    userId,
    setIsOpen,
    setType,
    toast,
    sizeChoose,
    productId,
    quantity,
    setIsLoading,
    handleGetListProduct
) => {
    if (!userId) {
        setIsOpen(true);
        setType('login');
        toast.warning('Vui lòng đăng nhập để thêm vào giỏ hàng');
        return;
    }

    if (sizeChoose === '') {
        toast.warning('Vui lòng chọn kích thước');
        return;
    }

    const data = {
        userId,
        productId,
        quantity,
        size: sizeChoose
    };
    setIsLoading(true);

    addToCart(data)
        .then((res) => {
            setIsOpen(true);
            setType('cart');
            setIsLoading(false);
            toast.success('Add product to cart success');
            handleGetListProduct(userId, 'cart');
        })
        .catch((err) => {
            setIsLoading(false);
            toast.error('Add product to cart failed');
        });
};
