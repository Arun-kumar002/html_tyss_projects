let request=new XMLHttpRequest()

request.open("GET","https://api.github.com/users");



request.onload=function(){
    if(this.status >=200 && this.status < 300){
    let value=JSON.parse(this.response);
    [...value].forEach(user=>{
        let{avatar_url}=user;
        document.querySelector("#temp").innerHTML=`<img src=${avatar_url} />`;
    })
}
}
request.onerror=function(){
    if(this.status>=300 && this.status<400){
        console.log(JSON.parse(this.response));
    }
}

request.send();