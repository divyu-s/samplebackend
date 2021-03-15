const routes = (app) => {
    app.route('/todo')
    //CRUD=> Create,Read,Update,Delete
    //       POST,GET,PUT,DELETE
    .get((req,res)=>{
        res.send("todo GET was successfull");
    })
    .post((req,res)=>{
        res.send("todo POST was successfull");
    })
}