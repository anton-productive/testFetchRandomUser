import React, {useEffect, useState} from 'react';
import Loader from "./Loader";
import {getRandomArrayElement} from "../helpers/arrayRandom";
import {nationalitiesList} from "../helpers/nationalities";
import {getUser} from "../services/user.service";
import {IUser} from "../interfaces/User.interface";
import Button from '@mui/material/Button';
import UserCard from "./UserCard";

const User = () => {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState<null | IUser>();
    const [error, setError] = useState<null | string>(null);

    useEffect(() => {
        fetchUser();
    }, []);

    const fetchUser = () => {
        setLoading(true);
        const gender = getRandomGender();
        const country = getRandomNationality();
        getUser(gender, country)
            .then(user => {
                setUser(user);
                setError(null);
                setLoading(false);
            })
            .catch(() => {
                setUser(null);
                setError('Server error, please try again later');
                setLoading(false);
            });
    }

    const getRandomGender = () => Math.random() < 0.5 ? 'male' : 'female';

    const getRandomNationality = () => getRandomArrayElement(nationalitiesList);

    return (
        <section>
            {
                loading
                    ? <Loader/>
                    : <div className="content">
                        { user && <UserCard user={ {...user} } /> }
                        { error && <div className="error">{error}</div> }
                        <Button variant="contained" onClick={fetchUser}>Get {user && 'another'} user</Button>
                    </div>
            }
        </section>
    );
}

export default User;
