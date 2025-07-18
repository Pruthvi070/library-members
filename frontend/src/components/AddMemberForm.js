import React, { useState } from "react";
import {
    Box,
    Button,
    TextField,
    MenuItem,
    DialogTitle,
    DialogContent,
    DialogActions,
} from "@mui/material";

function AddMemberForm({ onAdd, onClose }) {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        startDate: "",
        status: "Active",
    });

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(form);
    };

    return (
        <>
            <DialogTitle>Add New Member</DialogTitle>
            <form onSubmit={handleSubmit}>
                <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, minWidth: 350 }}>
                    <TextField name="name" label="Name" value={form.name} onChange={handleChange} required />
                    <TextField name="email" label="Email" type="email" value={form.email} onChange={handleChange} required />
                    <TextField name="phone" label="Phone" value={form.phone} onChange={handleChange} required />
                    <TextField name="startDate" label="Start Date" type="date" value={form.startDate} onChange={handleChange}
                        InputLabelProps={{ shrink: true }} required />
                    <TextField
                        name="status"
                        label="Status"
                        select
                        value={form.status}
                        onChange={handleChange}
                        required
                    >
                        <MenuItem value="Active">Active</MenuItem>
                        <MenuItem value="Inactive">Inactive</MenuItem>
                    </TextField>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose} color="secondary">
                        Cancel
                    </Button>
                    <Button type="submit" variant="contained">
                        Add
                    </Button>
                </DialogActions>
            </form>
        </>
    );
}
export default AddMemberForm;
