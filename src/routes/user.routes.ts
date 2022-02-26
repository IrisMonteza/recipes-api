import { Router } from 'express';
const router = Router();

import { signIn, signUp } from './users.controller';

router.post('/signup', signUp);
router.post('/signin', signIn);

//--
import * as usersController from './users.controller';

router.get('/profile', usersController.getUsers);
router.get('/profile/:id', usersController.getUser);
router.post('/signup', usersController.createUsers);

router.delete('/users/:id', usersController.deleteUser);
router.put('/profile/:id', usersController.updateUser);
// router.put('/profile-password', usersController.updatePassword);
//--

export default router;
