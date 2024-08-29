import UsersTable from '@/components/UsersTable';
import { IUser } from '@/models/user';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`);
  const users: IUser[] = await res.json();

  return {
    props: {
      users,
    },
  };
};

interface HomePageProps {
  users: IUser[];
}

const HomePage = ({ users }: HomePageProps) => {
  return (
    <>
      <UsersTable users={users} />
    </>
  );
};

export default HomePage;
