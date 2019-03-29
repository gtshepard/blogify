module.exports = (app, auth, post, mongo) => {
  /*   
    * add  mongo module.
    * then mongo.db.connect should work. 
    *   */
  
  /* get all posts for entire website*/
  app.get("/posts", auth,(req, res) => 
      post.findAll().then((result) 
      => res.json(result))

      /* for each post id search and retrieve from mongo 
    *   so collect all ids, 
    * */
      

  );

  /*get all posts for a user*/
  app.get("/post/:id", auth, (req, res) => 
    post.findById(req.params.id).then((result) 
      => res.json(result))
  );

  /* get create a post for a user*/
  app.post("/post", auth, (req, res) => 
    post.create({})
     .then((result) => res.json(result))
  );
 /* delete a post for a user*/
 app.delete("/post/:id", auth, (req, res) => 
   post.destroy({
    where: {
      id: req.params.id
    }
   }).then((result => res.json(result)) )
  );
 }