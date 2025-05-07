import { Router } from 'express';
import FarmController from '../controllers/farmController';

const router = Router();
const farmController = new FarmController();

// Route to create a new farm
router.post('/', farmController.createFarm);

// Route to get all farms
router.get('/', farmController.getAllFarms);

// Route to get a farm by ID
router.get('/:id', farmController.getFarmById);

// Route to update a farm by ID
router.put('/:id', farmController.updateFarm);

// Route to delete a farm by ID
router.delete('/:id', farmController.deleteFarm);

export default router;