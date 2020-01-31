import connectDb from './../../utils/connectDb';
import User from './../../models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

connectDb();

export default async (req, res) => {
  const { email, password } = req.body;
  try {
    //check the user already signed up
    const user = await User.findOne({ email }).select('+password');
    //If not
    if (!user) {
      return res.status(404).send('No user exists with that email');
    }
    // check the password
    const passwordMatch = await bcrypt.compare(password, user.password);
    //password matches or not
    if (passwordMatch) {
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
      // send token to client
      res.status(200).json(token);
    } else {
      res.status(401).send('Password do not match');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error while logging in');
  }
};
