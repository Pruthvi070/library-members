import React, { useState } from "react";
import {
    Box,
    Button,
    TextField,
    MenuItem,
    DialogTitle,
    DialogContent,
    DialogActions,
    InputAdornment,
    Typography,
} from "@mui/material";
import { User, Mail, Phone, CalendarDays, BadgeCheck } from "lucide-react";

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
            <DialogTitle
                sx={{
                    background: "linear-gradient(90deg, #6a82fb 0%, #fc5c7d 100%)",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: 22,
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                    fontFamily: 'Inter, Roboto, Arial, sans-serif',
                    letterSpacing: 1,
                }}
            >
                <Box display="flex" alignItems="center" gap={1}>
                    <BadgeCheck size={26} /> Add New Member
                </Box>
            </DialogTitle>
            <form onSubmit={handleSubmit}>
                <DialogContent
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2.5,
                        minWidth: 370,
                        background: "#f8fafc",
                        fontFamily: 'Inter, Roboto, Arial, sans-serif',
                        borderBottomLeftRadius: 16,
                        borderBottomRightRadius: 16,
                        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.10)",
                    }}
                >
                    <TextField
                        name="name"
                        label="Name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <User size={18} />
                                </InputAdornment>
                            ),
                        }}
                        sx={{
                            background: "#fff",
                            borderRadius: 2,
                            '& .MuiOutlinedInput-root': {
                                '&.Mui-focused fieldset': {
                                    borderColor: '#6a82fb',
                                    boxShadow: '0 0 0 2px #6a82fb22',
                                },
                            },
                        }}
                    />
                    <TextField
                        name="email"
                        label="Email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Mail size={18} />
                                </InputAdornment>
                            ),
                        }}
                        sx={{
                            background: "#fff",
                            borderRadius: 2,
                            '& .MuiOutlinedInput-root': {
                                '&.Mui-focused fieldset': {
                                    borderColor: '#fc5c7d',
                                    boxShadow: '0 0 0 2px #fc5c7d22',
                                },
                            },
                        }}
                    />
                    <TextField
                        name="phone"
                        label="Phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Phone size={18} />
                                </InputAdornment>
                            ),
                        }}
                        sx={{
                            background: "#fff",
                            borderRadius: 2,
                            '& .MuiOutlinedInput-root': {
                                '&.Mui-focused fieldset': {
                                    borderColor: '#6a82fb',
                                    boxShadow: '0 0 0 2px #6a82fb22',
                                },
                            },
                        }}
                    />
                    <TextField
                        name="startDate"
                        label="Start Date"
                        type="date"
                        value={form.startDate}
                        onChange={handleChange}
                        InputLabelProps={{ shrink: true }}
                        required
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <CalendarDays size={18} />
                                </InputAdornment>
                            ),
                        }}
                        sx={{
                            background: "#fff",
                            borderRadius: 2,
                            '& .MuiOutlinedInput-root': {
                                '&.Mui-focused fieldset': {
                                    borderColor: '#fc5c7d',
                                    boxShadow: '0 0 0 2px #fc5c7d22',
                                },
                            },
                        }}
                    />
                    <TextField
                        name="status"
                        label="Status"
                        select
                        value={form.status}
                        onChange={handleChange}
                        required
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <BadgeCheck size={18} />
                                </InputAdornment>
                            ),
                        }}
                        sx={{
                            background: "#fff",
                            borderRadius: 2,
                            '& .MuiOutlinedInput-root': {
                                '&.Mui-focused fieldset': {
                                    borderColor: '#6a82fb',
                                    boxShadow: '0 0 0 2px #6a82fb22',
                                },
                            },
                        }}
                    >
                        <MenuItem value="Active">Active</MenuItem>
                        <MenuItem value="Inactive">Inactive</MenuItem>
                    </TextField>
                </DialogContent>
                <DialogActions sx={{ px: 3, pb: 2, pt: 1, background: "#f8fafc", borderBottomLeftRadius: 16, borderBottomRightRadius: 16 }}>
                    <Button
                        onClick={onClose}
                        color="secondary"
                        sx={{
                            fontWeight: 600,
                            borderRadius: 2,
                            background: "#e0e7ff",
                            color: "#333",
                            boxShadow: "none",
                            '&:hover': { background: "#c7d2fe" },
                        }}
                    >
                        Cancel
                    </Button>
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{
                            fontWeight: 700,
                            borderRadius: 2,
                            background: "linear-gradient(90deg, #6a82fb 0%, #fc5c7d 100%)",
                            color: "#fff",
                            boxShadow: "0 2px 8px 0 #fc5c7d22",
                            '&:hover': {
                                background: "linear-gradient(90deg, #fc5c7d 0%, #6a82fb 100%)",
                            },
                        }}
                    >
                        Add
                    </Button>
                </DialogActions>
            </form>
        </>
    );
}
export default AddMemberForm;
