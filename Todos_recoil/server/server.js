const Express = require("express");
const app = Express();
const port = 8080;
const cors = require("cors");

app.use(cors({origin: '*'}))

function randomNumber(a,b) {
    const r = Math.floor(Math.random() * (b-a+1)) + a;
    return r;
}

app.get("/recoil", (req,res) => {
    const x = randomNumber(3,9);
    const count = {
        notification: randomNumber(5,115),
        network: randomNumber(15,56),
        job: randomNumber(12,30),
        message: randomNumber(10,45)
    };
    res.send(count);
},[])

app.listen(port, () => {
    console.log(`Server is listening at ${port}`);
})