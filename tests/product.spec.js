require("dotenv").config();
const client = require('../client');
const bcrypt = require ('bcrypt');
const SALT_COUNT = 10;

const { rebuildDB } = require('../db/seed')

const client = require('../db/client');
const { createUser, getUser, getUserById, getAllUsers,getUserByUsername } = require('../db/models/user');

const {getAllProducts, createProduct, singleProduct} = require('../db/models/products');

