import React, { useState } from 'react';

export const UserDataContext = React.createContext();

const UserContext = ({ children }) => {
    const [user, setUser] = useState({
        fullname: {firstname: '', lastname: ''},
        email: '',
        username: '',
    });

    return (
        <UserDataContext.Provider value={{ user, setUser }}>
            {children}
        </UserDataContext.Provider>
    );
};

export default UserContext;