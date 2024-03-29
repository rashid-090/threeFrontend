import * as React from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { TransitionProps } from '@mui/material/transitions';
import { Slide, Typography } from '@mui/material';
import { Button } from 'react-bootstrap';

const BootstrapDialog = styled(Dialog)(({ theme }: { theme: any }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export interface DialogTitleProps {
    id: string;
    children?: React.ReactNode;
    onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme: any) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
}

export default function Popup({ show, setShow, children }: any
    // {
    //     show: {
    //         type: string;
    //         _id: string;
    //         title: string;
    //         description: string;
    //         submit: (t: string) => void;
    //     };
    //     setShow: ({ title, type, description, _id, submit }: { _id: string, type: string, title: string, description: string | any, submit: () => void }) => void;
    //     children: null | any;
    // }
) {

    function onHide() {
        setShow({
            _id: "",
            type: "",
            title: "",
            description: "",
            submit: () => { },
        })
    }

    return (
        <BootstrapDialog
            onClose={onHide}
            aria-labelledby="customized-dialog-title"
            open={show?.title ? true : false}
            TransitionComponent={Transition}
            fullWidth={true}
        >
            <BootstrapDialogTitle id="customized-dialog-title" onClose={onHide}>
                {show?.title}
            </BootstrapDialogTitle>
            <DialogContent dividers>
                <Typography>
                    {show?.description ? show?.description : children}
                </Typography>
                
            </DialogContent>
            <DialogActions>
                <Button type='button' variant='secondary' onClick={onHide}>
                    Cancel
                </Button>
                <Button type='button' variant={show?.type == "delete" ? "danger" : "primary"} autoFocus
                    onClick={() => show?.submit(show?._id)}>
                    {show?.type == "delete" ? "Delete" : "Submit"}
                </Button>
            </DialogActions>
        </BootstrapDialog>
    );
}