export interface State {
    fetching: boolean;
    result: {
        httpStatus?: number;
        text?: string;
    };
}
