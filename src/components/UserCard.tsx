import React, {FC} from 'react';
import {IUser} from "../interfaces/User.interface";
import {Card, CardContent, CardHeader} from "@mui/material";
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

interface UserCardProps {
    user: null | IUser;
}

const UserCard: FC<UserCardProps> = ({user}) => {
    return (
        <Card sx={{maxWidth: 300, padding: '20px', margin: '20px auto', background: '#eee'}}>
            <CardHeader
                title={`${user?.name.title} ${user?.name.first} ${user?.name.last}`}
                subheader={user ? new Date(user.dob.date).toLocaleDateString() : ''}
            />
            <CardContent sx={{ textAlign: 'left' }}>
                <Avatar
                    sx={{
                        width: '70%',
                        aspectRatio: '1/1',
                        height: 'unset',
                        margin: '0 auto 40px'
                    }}
                    alt={user?.name.first + ' ' + user?.name.last}
                    src={user?.picture.large}
                />
                <Typography variant="body2">
                    {`Country: ${user?.location.country}`}
                </Typography>
                <Typography variant="body2">
                    {`Address: ${user?.location.city}, ${user?.location.street.name}, ${user?.location.street.number}`}
                </Typography>
                <Typography variant="body2">
                    {`Phone: ${user?.phone}`}
                </Typography>
                <Typography variant="body2">
                    {`Email: ${user?.email}`}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default UserCard;
