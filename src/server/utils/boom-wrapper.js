export const boomWrapper = (ctx, boomFn, ...args) => {
    if (typeof boomFn === 'function') {
        const { output } = boomFn(...args);
        ctx.status = output.statusCode;
        ctx.body = output.payload;
        return ctx;
    }

    throw new Error(`The given parameter is not a function ${boomFn}`);
};
