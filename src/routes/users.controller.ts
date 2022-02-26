import { Request, Response, RequestHandler } from 'express';
import User, { IUser } from './Users';
import jwt from 'jsonwebtoken';
import config from '../config/config';
import bcrypt from 'bcrypt';
//--
export const createUsers: RequestHandler = async (req, res) => {
  const userFound = await User.findOne({ email: req.body.email });
  if (userFound)
    return res.status(303).json({ message: 'the EMAIL already exists' });

  const newUser = new User(req.body);
  const savedUser = await newUser.save();
  res.json(savedUser);
};

export const getUsers: RequestHandler = async (req, res) => {
  try {
    const users = await User.find();
    return res.json(users);
  } catch (error) {
    res.json(error);
  }
};
export const getUser: RequestHandler = async (req, res) => {
  const userFound = await User.findById(req.params.id);

  if (!userFound) return res.status(204).json();

  return res.json(userFound);
};
export const deleteUser: RequestHandler = async (req, res) => {
  const deleteFound = await User.findByIdAndDelete(req.params.id);

  if (!deleteFound) return res.status(204).json();

  return res.status(204).json();
};

export const updateUser: RequestHandler = async (
  req,
  res
): Promise<Response> => {
  const userUpdated = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!userUpdated) return res.status(204).json();
  return res.json(userUpdated);
};

function createToken(user: IUser) {
  return jwt.sign({ id: user.id, email: user.email }, config.jwtSecret, {
    expiresIn: 86400,
  });
}

export const signUp = async (
  req: Request,
  res: Response
): Promise<Response> => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({ msg: 'Please.Send your emai and password' });
  }

  const user = await User.findOne({ email: req.body.email });
  console.log(user);
  if (user) {
    return res.status(400).json({ msg: 'The user already exists' });
  }

  const newUser = new User(req.body);
  await newUser.save();
  return res.status(201).json(newUser);
};

export const signIn = async (req: Request, res: Response) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({ msg: 'Please.Send your email and password' });
  }

  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(400).json({ msg: 'The user does not exists' });
  }

  const isMatch = await user.comparePassword(req.body.password);
  if (isMatch) {
    return res.status(200).json({ token: createToken(user), user: user });
  }

  return res.status(400).json({
    msg: 'The email or password are incorrect',
  });
};
