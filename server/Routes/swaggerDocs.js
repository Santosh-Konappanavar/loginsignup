const express = require("express");
const router = express.Router();
const controllers = require("../controllers/userControllers");

/**
 * @swagger
 * /user/register:
 *   post:
 *     summary: Register a new user
 *     description: Register a new user with first name, email, and password.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fname:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       '200':
 *         description: User registered successfully
 *       '400':
 *         description: Invalid input data or user already exists
 */
router.post('/user/register', controllers.userregister);

/**
 * @swagger
 * /user/sendotp:
 *   post:
 *     summary: Send OTP to the user's email
 *     description: Send OTP (One Time Password) to the user's email for verification.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *     responses:
 *       '200':
 *         description: OTP sent successfully
 *       '400':
 *         description: Invalid email or user not found
 */
router.post('/user/sendotp', controllers.userOtpSend);

/**
 * @swagger
 * /user/login:
 *   post:
 *     summary: User login
 *     description: Login a user using email and OTP (One Time Password).
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               otp:
 *                 type: string
 *     responses:
 *       '200':
 *         description: User logged in successfully
 *       '400':
 *         description: Invalid email, OTP, or user not found
 */
router.post('/user/login', controllers.userLogin);

module.exports = router;
