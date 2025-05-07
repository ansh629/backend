import { Request, Response } from 'express';
import FarmService from '../services/farmService';

class FarmController {
    async createFarm(req: Request, res: Response) {
        try {
            const farmData = req.body;
            const newFarm = await FarmService.createFarm(farmData);
            res.status(201).json(newFarm);
        } catch (error) {
            res.status(500).json({ message: 'Error creating farm', error });
        }
    }

    async updateFarm(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const farmData = req.body;
            const updatedFarm = await FarmService.updateFarm(id, farmData);
            if (updatedFarm) {
                res.status(200).json(updatedFarm);
            } else {
                res.status(404).json({ message: 'Farm not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error updating farm', error });
        }
    }

    async getFarm(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const farm = await FarmService.getFarmById(id);
            if (farm) {
                res.status(200).json(farm);
            } else {
                res.status(404).json({ message: 'Farm not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving farm', error });
        }
    }

    async getAllFarms(req: Request, res: Response) {
        try {
            const farms = await FarmService.getAllFarms();
            res.status(200).json(farms);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving farms', error });
        }
    }
}

export default new FarmController();