const PORT = process.env.PORT || 3000
const app = require('./src/app')

app.listen(PORT, ()=>{console.log(`Server on localhost:${PORT}`)})
app.get('/' , (req , res)=>{

   res.send('hello from simple server :)')

})