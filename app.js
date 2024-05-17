import express from 'express';
import mongoose from 'mongoose';
const app = express();
// parse json request body
app.use(express.json());
// app.use('/api/users', userRoutes);
// app.use('/api/roles', rolesRoutes);
// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/space-o")
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB', err));
// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
