export const getAuthUrl = () => '/auth';
export const getDashboardUrl = () => '/dashboard';


export const getLoginUrl = () => `${getAuthUrl()}/login`;
export const getRegistrationUrl = () => `${getAuthUrl()}/registration`;


export const getNewsUrl = () => `${getDashboardUrl()}/news`;
export const getCommentsUrl = () => `${getDashboardUrl()}/comments`;