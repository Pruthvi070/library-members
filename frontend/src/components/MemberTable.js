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
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import PersonIcon from "@mui/icons-material/Person";

function MemberTable({ members }) {
    return (
        <TableContainer component={Paper} elevation={3} sx={{ mt: 2 }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell><PersonIcon fontSize="small" sx={{ mr: 0.5 }} /> Name</TableCell>
                        <TableCell><MailIcon fontSize="small" sx={{ mr: 0.5 }} /> Email</TableCell>
                        <TableCell><PhoneIcon fontSize="small" sx={{ mr: 0.5 }} /> Phone</TableCell>
                        <TableCell>Start Date</TableCell>
                        <TableCell>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {members.length === 0 ? (
                        <TableRow>
                            <TableCell colSpan={5} align="center">
                                No members found.
                            </TableCell>
                        </TableRow>
                    ) : (
                        members.map((m) => (
                            <TableRow key={m.id}>
                                <TableCell>{m.name}</TableCell>
                                <TableCell>{m.email}</TableCell>
                                <TableCell>{m.phone}</TableCell>
                                <TableCell>{m.startDate}</TableCell>
                                <TableCell>
                                    <Chip
                                        label={m.status}
                                        color={m.status === "Active" ? "success" : "default"}
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
