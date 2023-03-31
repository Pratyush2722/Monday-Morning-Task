const exp = require("express");
const pratyush = require("./pratyush");
const app = exp();
app.use(exp.json());
app.listen(1500, () => {
    console.log("request to 1500");
});
app.get("/pratyush", (req.res) => {
    res.send(pratyush);

});
/*..........Get........*/
app.get("/get", (req, res) => {
    res.send("Welcome to My server 1500");

});
/*................post.............*/
app.post("/post", (req, res) => {
    if (!req.body.phonenumber) {
        res.status(350);
        return res.json({ error: " phonenumber is required*****" });
    }
    const student = {
        id: pratyush.length;
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phonenumber: req.body.phonenumber,
        gender: req.body.gender,
        ip_address: req.body.ip_address,
        
    };
    student.push(user);
    res.json(student);
});
/*........................Put................*/
app.put("/put/:id", (req, res) => {
    let id = req.params.id;
    let first_name = req.body.first_name;
    let last_name = req.body.last_name;
    let phonenumber = req.body.phonenumber;
    let index = pratyush.finIndex((pratyush) => {
        return pratyush.id == Number.parseInt(id);
    });
    console.log(id, req.body, index);
    if (index >= 0) {
        let pra = pratyush[index];
        pra.first_name = first_name;
        pra.last_name = last_name;
        pra.phonenumber = phonenumber;
        res.json(std);

    }
    else {
        
        res.status(404);
        res.end();
    }

});
/* .......................Delete...............*/
app.delete("/delete/:id", (req, res) => {
    let id = req.params.id;
    let index = pratyush.findIndex((pratyush) => {
        return pratyush.id == Number.parseInt(id);

    });
    if (index >= 0) {
        let pra = pratyush[index];
        pratyush.splice(index, 1);
        res.json(std);

    }
    else {
        res.status(404);
    }
});
