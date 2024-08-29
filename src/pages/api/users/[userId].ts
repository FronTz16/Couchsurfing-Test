import { NextApiRequest, NextApiResponse } from 'next';
import { USERS } from '@/data/users';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    // I try to pull a random profile image from randomuser.me but it was taking too long
    // and I was getting rate limited so I just used a placeholder image

    // const profileImageRes = await fetch('https://randomuser.me/api/');
    // const profileImageData = await profileImageRes.json();
    // const profileImage = profileImageData.results[0].picture.large;

    const { userId } = req.query;
    const user = USERS.find((user) => user.id === userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({
      ...user,
      profileImage: 'https://randomuser.me/api/portraits/men/79.jpg',
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch profile image' });
  }
}
