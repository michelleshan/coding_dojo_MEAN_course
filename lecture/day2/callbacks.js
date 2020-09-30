function step1(data,cb){
// 10 seconds
// do stuff with data
    data.push('step 1 done')
return (cb(data))
}

function step2(data,cb){
// 5 seconds
    console.log(data)
}

function step3(data,cb){

}

function step4(data,cb){

}

step1([0,1,2,3,4], step2)

console.log('done')

// syncrounous
// runs a single line at a time waiting for its return

// async
// will continue past a line while waiting for its return