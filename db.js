const { Client } = require('pg');

const client = new Client({
    connectionString: "postgres://mihhtzqwfpbejw:577b24af9bd51732c1dbb1b2373687faa7b826a31de854daedd3feac33a4d5dd@ec2-176-34-123-50.eu-west-1.compute.amazonaws.com:5432/d7cc53nqio36s1",
    ssl: {
        rejectUnauthorized: false
    }
});

client.connect();

module.exports = client