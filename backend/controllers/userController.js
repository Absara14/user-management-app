// logic for user action(CRUD)

import User from '../models/userModel.js';

// Create user
export const createUser = async (req, res) => {
  const { name, email, role } = req.body;
  try {
    const user = new User({ name, email, role });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all users
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
