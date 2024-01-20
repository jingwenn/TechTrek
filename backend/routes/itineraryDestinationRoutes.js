import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import cookieParser from "cookie-parser";

const router = express.Router();
router.use(cookieParser());

// // Test
// router.get('/', (req, res) => {
//     return res.status(201).send("ITINERARY DESTINATION Connection SUCCESS");
//   });

// // Create
// router.post('/', async (req, res) => {

// // Read
// router.get('/:id', async (req, res) => {

// // Read All
// router.get('/', async (req, res) => {

// // Update
// router.put('/:id', async (req, res) => {

// // Delete
// router.delete('/:id', async (req, res) => {

export default router;
