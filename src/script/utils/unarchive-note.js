import Swal from "sweetalert2";
import { POST_UNARCHIVED_NOTE } from "../api/services";

export const unarchiveNote = async (id) => {
  Swal.fire({
    title: "Are you sure?",
    text: "To unarchive note?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#485ff8",
    cancelButtonColor: "#f36e6e",
    confirmButtonText: "Yes, unarchive it!",
  }).then((result) => {
    if (result.isConfirmed) {
      POST_UNARCHIVED_NOTE(id);
      Swal.fire({
        title: "Unarchived!",
        text: "Your note has been unarchived.",
        icon: "success",
      });
    }
  });
};
