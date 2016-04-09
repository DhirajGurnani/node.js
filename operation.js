/**
 * Created by aneri on 26-02-2016.
 */

 function calculate(req, res, next) {
    var a1 = parseInt( req.param("op1"));
    var a2 = parseInt(req.param("op2"));
    var op=req.param("op");
    console.log(a1+ ";;"+a2+"::"+op);
if(op=="add")
{
    res.render('index', {opp:a1,data: a1+a2,op22:a2 });
}
else if(op=="sub")
{
    res.render('index', {opp:a1,data: a1-a2,op22:a2});
}
else if(op=="mul") {
    res.render('index', { opp:a1,data: a1*a2,op22:a2});
}

else if(op=="div") {
    if(isNaN(a1/a2))
    {
        var result="Undefined";
    }
  else if(a1/a2=="Infinity")
    {
        var result="Cannot divide by zero";
    }
    else
    {
        var result=a1/a2;
    }
    res.render('index', { opp:a1,data: result,op22:a2 });
}
else if(op=="undefined") {
    res.render('index', { data: " " });
}




}

exports.calculate=calculate;



/* GET home page. */
