
document.getElementById("fileP").addEventListener('change',function(){
    let re = new FileReader();
    re.onload = function() {
        console.log("file")
        worker.postMessage(document.getElementById("fileP").files[0])

    }
    re.readAsText(this.files[0]);
    console.log(re)

})

function fun(){
    var worker = new Worker('worker.js');

    worker.onmessage = (mssg) => {
        document.getElementById("rem").innerHTML = mssg.data;
    
        console.log("Main",mssg)
         worker.terminate()
    }
    worker.postMessage("sum")
}




