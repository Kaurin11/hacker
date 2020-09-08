export const getAuthUrl = () => '/auth';
export const getDashboardUrl = () => '/dashboard';

export const getLoginUrl = () => `${getAuthUrl()}/login`;

export const getNewsUrl = () => `${getDashboardUrl()}/news`;

export const getCommentUrl = (id) => `${getNewsUrl()}/comments/${id}`;
export const getCommentsUrl = () => `${getDashboardUrl()}/comments/}`;

export const getNewNewsUrl = () => `${getDashboardUrl()}/new-story`;
