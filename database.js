var sql = require('mysql');

var conn = sql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "training_laravel_kanishk"
});

conn.connect(function(err) {
    // console.log("connected...");
    conn.query("select * from users WHERE id = 4", function(err,result,fields){
        if(err) throw err;
        console.log(result);
    });
});