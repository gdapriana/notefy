import Swal from "sweetalert2";
import { POST_ARCHIVED_NOTE } from "../api/services";

export const archiveNote = async (id) => {
  Swal.fire({
    title: "Are you sure?",
    text: "To archive note?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#485ff8",
    cancelButtonColor: "#f36e6e",
    confirmButtonText: "Yes, archive it!",
  }).then((result) => {
    if (result.isConfirmed) {
      POST_ARCHIVED_NOTE(id);
      Swal.fire({
        title: "Archived!",
        text: "Your note has been archived.",
        icon: "success",
      });
    }
  });
};
