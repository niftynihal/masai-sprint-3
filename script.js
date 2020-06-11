window.onload = function(){
    this.getdata()
}

function getdata(){
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function() {
    if(this.readyState === 4) {
        // console.log(this.responseText);
        displaydata(this.response)
    }
    });

    xhr.open("GET", "https://api.covid19api.com/summary");

    xhr.send();
}

function displaydata(data){
    var div = document.getElementById("main")
    var obj = JSON.parse(data)
    console.log(obj)
    var NConfirmed = obj["Global"]["NewConfirmed"]
    var nc = document.getElementById("nc")
    nc.append(NConfirmed)
    var NDeaths = obj["Global"]["NewDeaths"]
    var nd = document.getElementById("nd")
    nd.append(NDeaths)
    var NewRecovered = obj["Global"]["NewRecovered"]
    var nr = document.getElementById("nr")
    nr.append(NewRecovered)
    var TConfirmed = obj["Global"]["TotalConfirmed"]
    var tc = document.getElementById("tc")
    tc.append(TConfirmed)
    var TDeaths = obj["Global"]["TotalDeaths"]
    var td = document.getElementById("td")
    td.append(TDeaths)
    var TRecovered = obj["Global"]["TotalRecovered"]
    var tr = document.getElementById("tr")
    tr.append(TRecovered)
    // div.append("New Confirmed : " + obj["Global"]["NewConfirmed"] + "\n")
    // div.append("New Deaths : " + obj["Global"]["NewDeaths"])
    // div.append("New Recovered : " + obj["Global"]["NewRecovered"])
    // div.append("Total Confirmed : " + obj["Global"]["TotalConfirmed"])
    // div.append("Total Deaths : " + obj["Global"]["TotalDeaths"])
    // div.append("Total Recovered : " + obj["Global"]["TotalRecovered"])
    
}