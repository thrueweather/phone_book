import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import Ionicon from 'react-ionicons';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

import { closeModal } from '../actions';

import Form from './Form';

const getModalStyle = () => {
    const top = 50
    const left = 50

    return {
        top: `${top}%`,
        left: `${left}%`,
        borderRadius: '4px',
        transform: `translate(-${top}%, -${left}%)`
    };
}

const styles = theme => ({
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
    },
    close: {
        position: 'absolute',
        top: 0,
        right: 0
    }
});

class SimpleModal extends React.Component {
    handleClose = () => this.props.closeModal();
    
    render() {
        const { classes } = this.props;
        return (
            <div className="modal">
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.props.modal}
                    onClose={this.handleClose}
                >
                    <div style={getModalStyle()} className={classes.paper}>
                        <Form/>
                        <Button
                            className={classes.close} 
                            variant="fab"
                            color="secondary"
                            onClick={this.handleClose}
                        >
                            <Ionicon icon="md-close" color="white"/>
                        </Button>
                    </div>
                </Modal>
            </div>
        );
    }
}

const SimpleModalWrapped = withStyles(styles)(SimpleModal);

const mapStateToProps = state => ({ modal: state.modal })

const mapDispatchToProps = dispatch => bindActionCreators({ closeModal: closeModal }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SimpleModalWrapped);