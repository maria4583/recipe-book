import PropTypes from 'prop-types'
import {
    Dialog as DialogMui,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Button
} from '@material-ui/core'

const Dialog = ({
    open,
    handleClick,
    title,
    text
}) => {
    return (
        <DialogMui open={open} onClose={() => handleClick(false)}>
            <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {text}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => handleClick(false)} color="primary">Нет</Button>
                <Button onClick={() => handleClick(true)} color="primary" autoFocus>Да</Button>
            </DialogActions>
        </DialogMui>
    )
}

Dialog.propTypes = {
    open: PropTypes.bool.isRequired,
    handleClick: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default Dialog