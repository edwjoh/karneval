import { increment_stat } from "../querys.js";

export function stats_middleware(type) {
    return (req, res, next) => {
        increment_stat(type);
        next();
    };
}
