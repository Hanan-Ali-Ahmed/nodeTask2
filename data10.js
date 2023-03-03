const fs = require("fs");
// const  allData = require("./data10")

const addperson = (id,fname , lname ,city , age , average = [networks, architecture, design, java, apps, graphic]) => {

    const allData = loadData()
     const duplicatedData = allData.filter((obj) =>{
        return obj.id === id
     })
    //  console.log(duplicatedData);
     if(duplicatedData.length == 0){
   allData.push({
    id : id,
    fname : fname,
    lname : lname ,
    city :city ,
    age :age  ,
    average: average
    
 
   })
     saveAllData(allData)
} else{
    console.log("error : duplicated id");
}
}
const loadData = () => {
    try{
    const dataJson = fs.readFileSync("data10.json").toString()
    return JSON.parse(dataJson)
}
catch {
    return []
}
}
const saveAllData = (allData) => {
    const saveAllDataJson=JSON.stringify(allData)
    fs.writeFileSync("data10.json",saveAllDataJson)

}

//   //////////////////////   Delete
 const deleted = (id) => {
    const allData = loadData()
     const dataKeep = allData.filter((obj) =>{
        return obj.id !== id
     })
    //  console.log(dataKeep);
     saveAllData(dataKeep)
 }

//    ///////////////  Reading
    const read = (id) => {
         const allData = loadData()
         const item = allData.find((obj) => {
            return obj.id == id
         })
          console.log(item);
    }
    // //////////// to list  information about students
    const list = () =>{
        const allData = loadData()
         allData.forEach((obj)=>{
           console.log(obj.fname , obj.age,  obj.city);
         
            
         
        }) }
module.exports = {
    addperson,
    deleted,
    read ,
    list
}