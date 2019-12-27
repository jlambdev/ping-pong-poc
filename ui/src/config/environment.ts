const {
    REACT_APP_ENABLE_API,
    REACT_APP_API_URI,
} = process.env;

const config: {
    ENABLE_API: string;
    API_URI: string;
} = {
    ENABLE_API: REACT_APP_ENABLE_API || '',
    API_URI: REACT_APP_API_URI || '',
};

export default config;
