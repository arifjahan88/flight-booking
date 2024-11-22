import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useSelector } from "react-redux";
import { selectModal } from "../../../store/slices/modalSlice";
import { useEffect, useRef } from "react";

export default function CommonDialog({ children, title, handleClose }) {
  const { open } = useSelector(selectModal);

  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <>
      <Dialog open={open} onClose={handleClose} scroll={"paper"}>
        <DialogTitle id="scroll-dialog-title">{title || "form"}</DialogTitle>
        <DialogContent dividers={true}>{children}</DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
