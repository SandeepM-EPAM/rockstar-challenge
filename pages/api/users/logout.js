const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
import getConfig from 'next/config';

import { apiHandler, usersRepo } from '../../../helpers/api';

const { serverRuntimeConfig } = getConfig();

export default apiHandler({
    post: logout
});

function logout(req, res) {
    
    // return basic user details and token
    return res.status(200).json({
        result: true,
    });
}
