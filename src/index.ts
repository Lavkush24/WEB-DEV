import express from "express";
const app = express();
import z from "zod"


const userSchema = z.object({
    username: z.string().min(1),
    email: z.string().email(),
    password: z.string().min(6),
});

// zod has infer type which extract user body form the schema 
type finalSchema = z.infer<typeof userSchema>;

app.put("/user",(req,res) => {
    const { success } = userSchema.safeParse(req.body);
    const updateBody: finalSchema = req.body(); // now the updatebody has type extracted from schema

    if(!success) {
        res.status(431).json({});
    }

    res.json({
        message: "updated user",
    });
})


app.listen();