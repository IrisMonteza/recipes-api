import { Router } from 'express';
const router = Router();

import * as recipesController from './recipes.controller';

router.get('/recipeList', recipesController.getRecipes);
//--

export default router;
