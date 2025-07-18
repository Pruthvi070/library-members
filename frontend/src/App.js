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
  InputAdornment,
  Box,
  Paper,
} from "@mui/material";
import { UserPlus, Search, Filter } from "lucide-react";
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
    <Container maxWidth="md" sx={{ mt: 6, fontFamily: 'Inter, Roboto, Arial, sans-serif' }}>
      <Paper
        elevation={4}
        sx={{
          borderRadius: 4,
          p: { xs: 2, sm: 4 },
          background: "#f8fafc",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.10)",
          mb: 4,
        }}
      >
        <Box
          sx={{
            background: "linear-gradient(90deg, #6a82fb 0%, #fc5c7d 100%)",
            borderRadius: 3,
            mb: 3,
            px: 3,
            py: 2.5,
            display: "flex",
            alignItems: "center",
            boxShadow: "0 2px 8px 0 #fc5c7d22",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "#fff",
              fontWeight: 800,
              letterSpacing: 1,
              fontFamily: 'Inter, Roboto, Arial, sans-serif',
              flex: 1,
            }}
            gutterBottom
          >
            Library Members
          </Typography>
        </Box>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2.5}
          alignItems="center"
          mb={3}
          sx={{
            background: "#fff",
            borderRadius: 3,
            p: 2,
            boxShadow: "0 2px 8px 0 #6a82fb11",
            flexWrap: "wrap",
          }}
        >
          <TextField
            label="Search by name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search size={18} />
                </InputAdornment>
              ),
            }}
            sx={{
              minWidth: 180,
              background: "#f8fafc",
              borderRadius: 2,
              '& .MuiOutlinedInput-root': {
                '&.Mui-focused fieldset': {
                  borderColor: '#6a82fb',
                  boxShadow: '0 0 0 2px #6a82fb22',
                },
              },
            }}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={filterActive}
                onChange={(e) => setFilterActive(e.target.checked)}
                icon={<Filter size={18} style={{ opacity: 0.5 }} />}
                checkedIcon={<Filter size={18} color="#6a82fb" />}
                sx={{ p: 0.5 }}
              />
            }
            label={<span style={{ fontWeight: 600, color: '#6a82fb' }}>Show only Active</span>}
            sx={{ ml: 1 }}
          />
          <Button
            variant="contained"
            startIcon={<UserPlus size={20} />}
            onClick={() => setShowModal(true)}
            sx={{
              fontWeight: 700,
              borderRadius: 2,
              background: "linear-gradient(90deg, #6a82fb 0%, #fc5c7d 100%)",
              color: "#fff",
              boxShadow: "0 2px 8px 0 #fc5c7d22",
              px: 3,
              py: 1.2,
              '&:hover': {
                background: "linear-gradient(90deg, #fc5c7d 0%, #6a82fb 100%)",
              },
            }}
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
      </Paper>
    </Container>
  );
}

export default App;
