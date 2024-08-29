import * as React from 'react';
import { DataGrid, GridColDef, GridEventListener } from '@mui/x-data-grid';
import { Container, useTheme } from '@mui/material';
import { IUser } from '@/models/user';
import { useRouter } from 'next/router';

const columns: GridColDef[] = [
  { field: 'name', headerName: 'First name', width: 200 },
  { field: 'lastName', headerName: 'Last name', width: 200 },
  {
    field: 'email',
    headerName: 'Email',
    width: 300,
  },
  {
    field: 'isActive',
    headerName: 'Status',
    description: 'This column represents the user status',
    width: 160,
    valueGetter: (value, row) => `${row.isActive ? 'Active' : 'Inactive'}`,
  },
  {
    field: 'createdAt',
    headerName: 'Registered At',
    width: 160,
    valueGetter: (value, row) =>
      `${new Date(row.createdAt).toLocaleDateString()}`,
  },
];

interface UsersTableProps {
  users: IUser[];
}

export default function UsersTable({ users }: UsersTableProps) {
  const theme = useTheme();
  const router = useRouter();

  const handleRowClick: GridEventListener<'rowClick'> = (params) => {
    router.push(`/user/${params.row.id}`);
  };

  return (
    <Container
      sx={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <DataGrid
        rows={users}
        checkboxSelection={false}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        onRowClick={handleRowClick}
        pageSizeOptions={[5, 10]}
        sx={{
          overflow: 'clip',
          cursor: 'pointer',
          backgroundColor: theme.palette.background.default,
        }}
      />
    </Container>
  );
}
