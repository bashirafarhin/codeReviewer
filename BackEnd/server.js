require('dotenv').config()
const app = require('./src/app')
const PORT = process.env.PORT || 8000 ;


app.listen(PORT, () => {
    console.log('Server is running on http://localhost:3000')
})