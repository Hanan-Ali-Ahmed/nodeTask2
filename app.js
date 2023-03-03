const yargs = require("yargs")
const  data10 = require("./data10")
yargs.command({
    command : "add" ,
    describe : "add student",
    builder : {
        fname : {
            describe : "student first name",
            demandOption : true,
            type : "string"
        },
        lname : {
            describe : "student last name",
            demandOption : true,
            type : "string"
        },
    },
    handler  : (x)=> {
        data10.addperson(x.id ,x.fname , x.lname , x.city , x.age , x.average = (x.networks + x.architecture + x.design + x.java + x.apps + x.graphic) / 6);
        if (x.average >= 90) {
            console.log("excellent");
        }
        else if (x.average >= 80) {
            console.log("very good");
        }
        else if (x.average >= 70) {
            console.log("good");
        } else if (x.average >= 60) {
            console.log("middle");
        } else if (x.average >= 50) {
            console.log("acceptable");
        } else  {
            console.log("fail");
        }
    }
})
yargs.command({
    command : "delete" ,
    describe : "delete student",
    handler  : (x)=> {
       data10.deleted(x.id)
    }
})
// ////////  Read 
yargs.command({
    command : "read" ,
    describe : "read the information of student",
    builder  : {
        id : {
            describe : "read info",
            demandOption : true,
            type : "string"
        },
    },
        handler : (x) => {
            data10.read(x.id)
        }
        })
// //////////////// list
yargs.command({
    command : "list" ,
    describe : "list information of student",
    handler : () =>{
        data10.list()
    }
})

console.log(yargs.argv);