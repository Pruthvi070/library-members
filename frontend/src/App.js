import React, { useEffect, useState } from "react";
import MemberTable from "./components/MemberTable";
import AddMemberForm from "./components/AddMemberForm";
import {
  Container,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Stack,
  Dialog,
} from "@mui/material";
import AddIcon from "@mui/icons-material/PersonAdd";
import axios from "axios";

function App() {
  const [members, setMembers] = useState([]);
  const [filterActive, setFilterActive] = useState(false);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:4000/members").then((res) => setMembers(res.data));
  }, []);

  const handleAddMember = (member) => {
    axios.post("http://localhost:4000/members", member)
      .then((res) => {
        setMembers([...members, res.data]);
        setShowModal(false);
      });
  };

  const filtered = members
    .filter((m) => (!filterActive || m.status === "Active"))
    .filter((m) => m.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      <Typography variant="h4" gutterBottom color="primary">
        Library Members
      </Typography>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={2} alignItems="center" mb={2}>
        <TextField
          label="Search by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          size="small"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={filterActive}
              onChange={(e) => setFilterActive(e.target.checked)}
            />
          }
          label="Show only Active"
        />
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={() => setShowModal(true)}
        >
          Add New Member
        </Button>
      </Stack>
      <MemberTable members={filtered} />
      <Dialog open={showModal} onClose={() => setShowModal(false)}>
        <AddMemberForm
          onAdd={handleAddMember}
          onClose={() => setShowModal(false)}
        />
      </Dialog>
    </Container>
  );
}

export default App;
