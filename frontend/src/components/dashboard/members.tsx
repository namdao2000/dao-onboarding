import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './title';
import { ReactElement, useEffect, useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useUser } from '../../services/user/use-user';
import { User } from '../../types/user';
import { Avatar } from './avatar';
import Typography from '@mui/material/Typography';
import { Chip } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SortIcon from '@mui/icons-material/Sort';

function preventDefault(event: React.MouseEvent): void {
  event.preventDefault();
}

const getUserRoleText = (role: string): string => {
  switch (role) {
    case 'Marketer':
      return 'Acquiring mad level of customers';
    case 'Developer':
      return 'Shipping a bombass feature';
    case 'Lurker':
      return 'Just looking around';
    case 'Biz Dev':
      return 'Chilling in my office';
    case 'Designer':
      return 'Building (insert task) on Figma';
    default:
      return 'Growing this DAO organization';
  }
};

const getUserRoleChip = (role: string): ReactElement => {
  switch (role) {
    case 'Marketer':
      return <Chip label={role} color="primary" />;
    case 'Developer':
      return <Chip label={role} color="error" />;
    case 'Lurker':
      return <Chip label={role} color="info" />;
    case 'Biz Dev':
      return <Chip label={role} color="success" />;
    case 'Designer':
      return <Chip label={role} color="warning" />;
    default:
      return <Chip label={role} color="default" />;
  }
};

export default function Members(): ReactElement {
  const { getUsers } = useUser();
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUsers(0).then((data) => {
      setUsers(data);
    });
  }, []);

  return (
    <React.Fragment>
      <div className="flex justify-between items-center">
        <Title>All Members</Title>
        <div className="flex space-x-4 pr-4">
          <div className="flex items-center space-x-2">
            <SortIcon />
            <Typography
              className="hover:cursor-pointer"
              variant="body2"
              sx={{ fontWeight: 'light' }}
            >
              Sort
            </Typography>
          </div>
          <div className="flex items-center space-x-2">
            <FilterAltIcon className="text-xs" />
            <Typography
              className="hover:cursor-pointer"
              variant="body2"
              sx={{ fontWeight: 'light' }}
            >
              Filter
            </Typography>
          </div>
        </div>
      </div>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Member details</TableCell>
            <TableCell>Discord name</TableCell>
            <TableCell>Date joined</TableCell>
            <TableCell align="center">Role</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user, key) => (
            <TableRow key={key}>
              <TableCell>
                <div className="flex items-center space-x-4">
                  <Avatar />
                  <div>
                    <Typography variant="body2">
                      {getUserRoleText(user.userRole)}
                    </Typography>
                    <Typography variant="caption" sx={{ fontWeight: 'light' }}>
                      Updated 1 Day ago
                    </Typography>
                  </div>
                </div>
              </TableCell>
              <TableCell>{user.discordUsername}</TableCell>
              <TableCell>{user.createdAt}</TableCell>
              <TableCell align="center">
                {getUserRoleChip(user.userRole)}
              </TableCell>
              <TableCell align="right">
                <div className="hover:cursor-pointer">
                  <MoreVertIcon />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more members
      </Link>
    </React.Fragment>
  );
}
