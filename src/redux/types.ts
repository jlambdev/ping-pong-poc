export type Pong = {
    httpStatus?: number;
    text?: string;
};

export interface State {
    fetching: boolean;
    result: Pong;
}
