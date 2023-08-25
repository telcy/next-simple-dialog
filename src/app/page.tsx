"use client";

import Button from "@mui/material/Button";
import { useModal } from "mui-modal-provider";
import SimpleDialog from "./SimpleDialog";

export default function Home() {
  const { showModal } = useModal();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Next</h1>
      <Button
        variant="contained"
        onClick={() => showModal(SimpleDialog)}
        color="primary"
      >
        simple dialog
      </Button>
    </div>
  );
}
