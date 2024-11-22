import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useSelector } from "react-redux";
import { selectModal } from "../../../store/slices/modalSlice";
import { IconButton } from "@mui/material";
import { IoMdCloseCircle } from "react-icons/io";

export default function CommonDialog({ children, title, handleClose }) {
  const { open } = useSelector(selectModal);

  return (
    <>
      <Dialog open={open || false} onClose={handleClose} scroll={"paper"} fullWidth>
        <DialogTitle className="flex justify-between">
          <div>{title}</div>
          <IconButton onClick={handleClose}>
            <IoMdCloseCircle />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers={true}>{children}</DialogContent>
      </Dialog>
    </>
  );
}
