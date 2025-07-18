import React from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
  Paper,
  Chip,
  Box,
  Typography,
} from "@mui/material";
import { User, Mail, Phone, Users } from "lucide-react";

function MemberTable({ members }) {
  return (
    <TableContainer
      component={Paper}
      elevation={4}
      sx={{
        mt: 3,
        borderRadius: 4,
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
        fontFamily: 'Inter, Roboto, Arial, sans-serif',
        overflow: "hidden",
      }}
    >
      <Table>
        <TableHead>
          <TableRow
            sx={{
              background: "linear-gradient(90deg, #6a82fb 0%, #fc5c7d 100%)",
            }}
          >
            <TableCell sx={{ color: "#fff", fontWeight: 700, fontSize: 17 }}>
              <User size={18} style={{ marginRight: 6, verticalAlign: "middle" }} /> Name
            </TableCell>
            <TableCell sx={{ color: "#fff", fontWeight: 700, fontSize: 17 }}>
              <Mail size={18} style={{ marginRight: 6, verticalAlign: "middle" }} /> Email
            </TableCell>
            <TableCell sx={{ color: "#fff", fontWeight: 700, fontSize: 17 }}>
              <Phone size={18} style={{ marginRight: 6, verticalAlign: "middle" }} /> Phone
            </TableCell>
            <TableCell sx={{ color: "#fff", fontWeight: 700, fontSize: 17 }}>Start Date</TableCell>
            <TableCell sx={{ color: "#fff", fontWeight: 700, fontSize: 17 }}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {members.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} align="center" sx={{ py: 6 }}>
                <Box display="flex" flexDirection="column" alignItems="center" gap={1}>
                  <Users size={40} color="#fc5c7d" />
                  <Typography variant="h6" color="text.secondary" fontWeight={500}>
                    No members found.
                  </Typography>
                </Box>
              </TableCell>
            </TableRow>
          ) : (
            members.map((m, idx) => (
              <TableRow
                key={m.id}
                sx={{
                  backgroundColor: idx % 2 === 0 ? "#f8fafc" : "#f1f5f9",
                  transition: "background 0.2s",
                  '&:hover': {
                    background: "#e0e7ff",
                  },
                }}
              >
                <TableCell sx={{ fontWeight: 500 }}>{m.name}</TableCell>
                <TableCell>{m.email}</TableCell>
                <TableCell>{m.phone}</TableCell>
                <TableCell>{m.startDate}</TableCell>
                <TableCell>
                  <Chip
                    label={m.status}
                    sx={{
                      background:
                        m.status === "Active"
                          ? "linear-gradient(90deg, #43e97b 0%, #38f9d7 100%)"
                          : "#cfd8dc",
                      color: m.status === "Active" ? "#222" : "#666",
                      fontWeight: 600,
                      letterSpacing: 0.5,
                    }}
                    size="small"
                  />
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default MemberTable;
