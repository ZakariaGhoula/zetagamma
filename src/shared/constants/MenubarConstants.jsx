import keyMirror from 'keymirror';

// Todo constants
export const MenubarConstants = {

    PayloadSources: keyMirror({
        SERVER_ACTION: null,
        VIEW_ACTION: null
    }),

    ActionTypes: keyMirror({

        // Routes
        REDIRECT: null,
        //USER
        MENUBAR_CHANGE: null

    })
};
