import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

import RegisterModal from '../../Modals/RegisterModal/RegisterModal';
import SignInModal from '../../Modals/SignInModal/SignInModal';

export default class MenuLogin extends React.Component {
    static propTypes = {
        modalType: PropTypes.string.isRequired,
        modalMode: PropTypes.bool.isRequired,
        openModal: PropTypes.func.isRequired,
        closeModal: PropTypes.func.isRequired,
        signIn: PropTypes.func.isRequired,
        error: PropTypes.string.isRequired,
    };

    showModalSignIn = () => {
        this.props.openModal('sign-in');
    }

    showModalSignUp = () => {
        this.props.openModal('sign-up');
    }

    render() {
        const {
            modalMode,
            modalType,
            closeModal,
            openModal,
            signIn,
            error
        } = this.props;

        console.log('visible', modalMode, 'type', modalType);

        return (
            <div className="menu-login">
                <span className="menu-main__left-items--username" onClick={this.showModalSignIn}>Sign in</span>
                <span> / </span>
                <span className="menu-main__left-items--username" onClick={this.showModalSignUp}>Get started</span>
                {modalType === 'sign-in'
                    ?
                    <SignInModal
                        visible={modalMode}
                        close={closeModal}
                        open={openModal}
                        signIn={signIn}
                        error={error}
                    />
                    :
                    <RegisterModal
                        visible={modalMode}
                        close={closeModal}
                        open={openModal}
                    />
                }
            </div>
        );
    }
    
};
