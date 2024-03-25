import Swal from "sweetalert2";
import { renderNotes } from "../utils/render-notes";

export const GET_NOTES = async () => {
  const loadingUi = document.querySelector("#loading");
  loadingUi.classList.add("show");
  loadingUi.classList.remove("hidden");

  try {
    const response = await fetch(`https://notes-api.dicoding.dev/v2/notes`);
    const responseJson = await response.json();

    if (responseJson.error) {
      loadingUi.classList.add("hidden");
      loadingUi.classList.remove("show");
      await Swal.fire({
        title: "Something went wrong",
        text: responseJson.message,
        icon: "error",
      });
    } else {
      loadingUi.classList.add("hidden");
      loadingUi.classList.remove("show");
      return responseJson.data;
    }
  } catch (error) {
    loadingUi.classList.add("hidden");
    loadingUi.classList.remove("show");
    await Swal.fire({
      title: "Something went wrong",
      text: error,
      icon: "error",
    });
  }
};
export const GET_ARCHIVED_NOTES = async () => {
  const loadingUi = document.querySelector("#loading");
  loadingUi.classList.add("show");
  loadingUi.classList.remove("hidden");

  try {
    const response = await fetch(
      `https://notes-api.dicoding.dev/v2/notes/archived`,
    );
    const responseJson = await response.json();

    if (responseJson.error) {
      loadingUi.classList.add("hidden");
      loadingUi.classList.remove("show");
      await Swal.fire({
        title: "Something went wrong",
        text: responseJson.message,
        icon: "error",
      });
    } else {
      loadingUi.classList.add("hidden");
      loadingUi.classList.remove("show");
      return responseJson.data;
    }
  } catch (error) {
    loadingUi.classList.add("hidden");
    loadingUi.classList.remove("show");
    await Swal.fire({
      title: "Something went wrong",
      text: error,
      icon: "error",
    });
  }
};
export const POST_CREATE_NOTES = async (note) => {
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    };

    const response = await fetch(
      `https://notes-api.dicoding.dev/v2/notes`,
      options,
    );
    const responseJson = await response.json();

    await Swal.fire({
      title: "Success",
      text: responseJson.message,
      icon: "success",
    });
    await renderNotes();
  } catch (err) {
    await Swal.fire({
      title: "Something went wrong",
      text: err,
      icon: "error",
    });
  }
};
export const POST_ARCHIVED_NOTE = async (id) => {
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(
      `https://notes-api.dicoding.dev/v2/notes/${id}/archive`,
      options,
    );
    renderNotes();
  } catch (err) {
    await Swal.fire({
      title: "Something went wrong",
      text: err,
      icon: "error",
    });
  }
};
export const POST_UNARCHIVED_NOTE = async (id) => {
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(
      `https://notes-api.dicoding.dev/v2/notes/${id}/unarchive`,
      options,
    );
    renderNotes();
  } catch (err) {
    await Swal.fire({
      title: "Something went wrong",
      text: err,
      icon: "error",
    });
  }
};
export const DELETE_NOTES = async (id) => {
  try {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(
      `https://notes-api.dicoding.dev/v2/notes/${id}`,
      options,
    );
    await renderNotes();
  } catch (err) {
    await Swal.fire({
      title: "Something went wrong",
      text: err,
      icon: "error",
    });
  }
};
