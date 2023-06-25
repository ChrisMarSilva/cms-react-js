module.exports = () => {
    const data = { users: [] }

    for (let i = 0; i < 1000; i++) {  // Create 1000 users
        data.users.push({ id: i, name: `user${i}` })
    }

    return data
}

// json-server index.js
// json-server db.json -w --port 3001
// json-server http://example.com/file.json