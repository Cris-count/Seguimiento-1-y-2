for(let i = 2; i <= 10; i*= 2 ){
    //lo que se va a repetir
}

// para romper el paso (break)

for(let i = 1; i <= 10; i++ ){
    if(1 == 3){
        break
    }
    console.log(i)
}

//continue
for(let i = 1; i <= 10; i++ ){
    if(1 == 3){
        continue
    }
    console.log(i)
}

//mientras (while)

{let i = 3
while(i <= 5){
    console.log(i)
    i++
}}

//haga asta (do,while)

{let i = 2

do{
    console.log(i)
    i++
} while(i <= 5)
}

