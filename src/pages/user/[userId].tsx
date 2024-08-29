import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { IUser } from '@/models/user';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material';
import Avatar from '@mui/material/Avatar';

interface UserDetailProps {
  user: IUser | null;
  message?: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { userId } = context.params!;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${userId}`);
  const user: IUser | null = await res.json();

  return {
    props: {
      user,
    },
  };
};

const UserDetails = ({ user, message: errorMessage }: UserDetailProps) => {
  const router = useRouter();
  const theme = useTheme();

  if (errorMessage) {
    return (
      <Typography variant="h5">Something went wrong {errorMessage}</Typography>
    );
  }

  if (!user) {
    return <Typography variant="h5">User not found</Typography>;
  }

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Card sx={{ minWidth: 700 }}>
        <CardContent>
          <Box display="flex" justifyContent="center" mb={2}>
            <Avatar
              src={user.profileImage || ''}
              sx={{ width: 100, height: 100 }}
            />
          </Box>
          <Typography variant="h4" component="div">
            {user.name} {user.lastName}
          </Typography>
          <Typography sx={{ mb: theme.spacing(1.5) }} color="text.secondary">
            Email: {user.email}
          </Typography>
          <Typography sx={{ mb: theme.spacing(1.5) }} color="text.secondary">
            Status: {user.isActive ? 'Active' : 'Inactive'}
          </Typography>
          <Typography sx={{ mb: theme.spacing(1.5) }} color="text.secondary">
            Registration Date: {new Date(user.createdAt).toLocaleDateString()}
          </Typography>
          <Button variant="contained" onClick={() => router.back()}>
            Go Back
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default UserDetails;
