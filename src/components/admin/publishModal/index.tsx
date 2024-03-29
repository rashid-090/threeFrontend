import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { TransitionProps } from "@mui/material/transitions";
import { Slide, Typography } from "@mui/material";
import { Button } from "react-bootstrap";
import DateTimeInput from "../dateTime";

const BootstrapDialog = styled(Dialog)(({ theme }: { theme: any }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
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
            position: "absolute",
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

function Popup({ show, setShow, children }: any) {
  const [selectedOption, setSelectedOption] = React.useState<any>();
  const [value, setValue] = React.useState<any>();

  const handleOptionChange = (event: any) => {
    setSelectedOption(event.target.value);
    if (value === "immediate") {
      setValue(new Date());
    } else {
      setValue('');
    }
  };
  function onHide() {
    setShow({
      _id: "",
      type: "",
      title: "",
      description: "",
      submit: () => {},
    });
    setSelectedOption('');
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
        <div className="row">
          <div className="col form-group">
            <label htmlFor="publishType">Publish Type</label>
            <select
              id="publishType"
              name="publishType"
              value={selectedOption}
              onChange={handleOptionChange}
              className={"form-select"}
            >
              <option value={""}>Select Publish Type</option>
              <option value={"immediate"}>Immediate</option>
              <option value={"scheduled"}>Scheduled</option>
            </select>
            {!selectedOption && <small className="text-danger">{" Please Select Publish Type"}</small>}
          </div>
        </div>
        {selectedOption === "scheduled" && (
          <div className="row mt-2">
            <div className="col form-group">
              <label htmlFor="dateToBePublished">Scheduled</label>
              <DateTimeInput
                value={value}
                className={"form-control w-100"}
                onChange={(e) => setValue(e?.$d)}
              />
            </div>
          </div>
        )}
      </DialogContent>
      <DialogActions>
        <Button type="button" variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button
          type="button"
          variant={show?.type === "delete" ? "danger" : "primary"}
          autoFocus
          onClick={() => show?.submit(show?._id, selectedOption, value)}
        >
          {show?.type === "delete" ? "Delete" : "Submit"}
        </Button>
      </DialogActions>
    </BootstrapDialog>
  );
}

export default React.memo(Popup);
