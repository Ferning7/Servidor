import express from 'express';

const app = express();
app.listen(3000, () => {
    console.log("Perigoso ta na ativa");
});

app.get("/api", (req, res) =>{
    res.status(200).send("CAN I TALK MY SHIT AGAIN??");
});
