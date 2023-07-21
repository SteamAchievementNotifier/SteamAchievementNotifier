export declare type Options = {
    save?: {
        path: string;
        overwrite?: boolean;
    };
    capture?: RequireAtLeastOne<{
        transparentBackground: boolean;
        highlighted: boolean;
    }>;
};
declare type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = Pick<T, Exclude<keyof T, Keys>> & {
    [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>;
}[Keys];
export {};
