export default function promiseMiddleware() {
    return next => action => {
        const { promise, type, ...rest } = action;

        if (!promise) return next(action);


        //  const REQUEST = type + '_REQUEST';
        // const SUCCESS = type + '_SUCCESS';
        //const FAILURE = type + '_FAILURE';
        const [REQUEST, SUCCESS, FAILURE] = type;
        next({ ...rest, type: REQUEST });

        return promise
            .then(result => {
                next({...rest, result, type: SUCCESS});

                return true;
            })
            .catch(error => {
                next({...rest, error, type: FAILURE});
                console.log(error);

                return false;
            });
    };
}

/*
 export default function promiseMiddleware(objMethods) {
 return next => action => {
 const { promise, type, ...rest } = action;
 if (!promise) return next(action);
 const [REQUEST, SUCCESS, FAILURE] = type;
 next({ ...rest, type: REQUEST });
 return promise.then(
 (result) => next({ ...rest, result, type: SUCCESS }),
 (error) => next({ ...rest, error, type: FAILURE })
 );
 };
 }*/