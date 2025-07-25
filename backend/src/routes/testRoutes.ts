import express, { Router } from 'express';
import { ping, pingDB } from '../controllers/testController.js';

const router: Router = express.Router();

router.get("/ping", ping);
router.get("/ping-db", pingDB)

export default router;