export const routes = {
    index: '/',
    login: '/auth/login',
    register: '/auth/register',
    productDetails: '/products/:productId',
    feedback: '/feedback',
    shop: '/shop',
    profile: '/profile/{username}',
    cart: '/cart',
    checkout: '/checkout',
    //payment: '/payment'
}

export const authRoutes = [routes.login, routes.register]