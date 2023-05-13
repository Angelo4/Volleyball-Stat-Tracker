export declare const isObject: (obj: unknown) => obj is Record<string, string | number | boolean>;
/** Encode object to url parameters */
export declare const objectToParams: (obj: unknown) => string;
/** Decode params to object */
export declare const paramsToObject: (params: string) => Record<string, string>;
