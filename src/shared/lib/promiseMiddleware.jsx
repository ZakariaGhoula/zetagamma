import {showLoading, hideLoading} from 'react-redux-loading-bar';


export default function promiseMiddleware() {

    const promiseTypeSuffixes = ['REQUEST', 'SUCCESS', 'FAILURE'];
    return ({getState, dispatch}) => next => action => {
        next(action)
        if (action.type === undefined) {
            return
        }
        // const {promise, type, ...rest} = action;
        // if (!promise) return next(action);
        const [REQUEST, SUCCESS, FAILURE] = promiseTypeSuffixes;
        // next({ ...rest, type: REQUEST });
        // console.log(type);  dispatch(showLoading());
        const isPending = new RegExp(`${REQUEST}$`, 'g')
        console.log(action.type);
        // return promise
        //     .then(result  => {
        //
        //         next({ ...rest, result, type: SUCCESS });
        //         // dispatch(showLoading()); dispatch(hideLoading());
        //         return true;
        //     } )
        //     .catch(error => {
        //         // dispatch(hideLoading());
        //         next({ ...rest, error, type: FAILURE });
        //         console.log(error);
        //         return false;
        //     });


//         //  const REQUEST = type + '_REQUEST';
//         // const SUCCESS = type + '_SUCCESS';
//         //const FAILURE = type + '_FAILURE';
//         const isPending = new RegExp(`${REQUEST}$`, 'g')
//         const isFulfilled = new RegExp(`${SUCCESS}$`, 'g')
//         const isRejected = new RegExp(`${FAILURE}$`, 'g')
//         if (!!action.type.match(isPending)) {
//             dispatch(showLoading())
//         } else if (!!action.type.match(isFulfilled) || !!action.type.match(isRejected)) {
//             dispatch(hideLoading())
//         }
//
//
//         // dispatch(showLoading());
//
// // dispatch(showLoading());
//         console.log(action.type);
//
//         dispatch(hideLoading());
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