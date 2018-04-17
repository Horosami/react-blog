import { ACTION_TYPES } from '../constants/action-types';

export const openModal = ({ modalType }) => ({
    type: ACTION_TYPES.TOGGLE_MODAL,
    payload: {
        modalType,
        modalMode: true
    }
});

export const closeModal = ({ modalType }) => ({
    type: ACTION_TYPES.TOGGLE_MODAL,
    payload: {
        modalType,
        modalMode: true
    }
});
