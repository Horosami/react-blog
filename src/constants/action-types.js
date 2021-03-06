import keyMirror from 'keymirror';

export const ACTION_TYPES = keyMirror({
    SET_USER: null,

    // modal action types
    TOGGLE_MODAL: null,

    // auth
    SIGN_IN_SUCCESS: null,
    SIGN_IN_ERROR: null,
    SIGN_UP: null,

    // posts
    FETCH_POSTS: null,
    FETCH_POSTS_SUCCESS: null,
    FETCH_POSTS_FAILURE: null,

    // categories
    LOAD_CATEGORIES: null,
    LOAD_CATEGORIES_SUCCESS: null,
    LOAD_CATEGORIES_FAILURE: null,

    // tags
    LOAD_TAGS: null,
    LOAD_TAGS_SUCCESS: null,
    LOAD_TAGS_FAILURE: null,
});
