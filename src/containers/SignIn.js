import { connect } from 'react-redux';

import { signInGoogle } from '../actions/auth';
import { openModal, closeModal } from '../actions/modal';
import AuthModal from '../components/AuthModal/AuthModal';

const mapStateToProps = state => ({
    modalMode: state.modalMode
});

const mapDispatchToProps = dispatch => ({
    signInGoogle: () => dispatch(signInGoogle),
    openModal: () => dispatch(openModal),
    closeModal: () => dispatch(closeModal)
});

export const SignIn = connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthModal);
