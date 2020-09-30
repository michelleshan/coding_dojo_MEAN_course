users = [
    {
    fname: "Kermit",
    lname: "the Frog",
    languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
    interests: {
        music: ["guitar", "flute"],
        dance: ["tap", "salsa"],
        television: ["Black Mirror", "Stranger Things"]
    }
    },
    {
    fname: "Winnie",
    lname: "the Pooh",
    languages: ["Python", "Swift", "Java"],
    interests: {
        food: ["honey", "honeycomb"],
        flowers: ["honeysuckle"],
        mysteries: ["Heffalumps"]
    }
    },
    {
    fname: "Arthur",
    lname: "Dent",
    languages: ["JavaScript", "HTML", "Go"],
    interests: {
        space: ["stars", "planets", "improbability"],
        home: ["tea", "yellow bulldozers"]
    }
    }
]

function userLanguages(){
    for (var i = 0; i < users.length; i++){
        var str = users[i].fname+" "+users[i].lname+" knows ";
        for (var j = 0; j < users[i].languages.length; j++){
            str += users[i].languages[j]+", ";
        }
        console.log(str.substring(0,str.length-2));
        str = users[i].fname+" is also interested in "
        for (let [key, value] of Object.entries(users[i].interests)){
            for (v of value){
                str += v+", "
            }
        }
        console.log(str.substring(0,str.length-2));
    }
}
userLanguages(users)