const fileWorker = new Worker('fileWorker.js');
fileWorker.onmessage = (mssg) => {
    document.getElementById("rem").innerHTML = mssg.data;
    

}
document.getElementById("fileP").addEventListener('change',function(){
    let re = new FileReader();
    re.onload = function() {
        console.log("file")
        fileWorker.postMessage(document.getElementById("fileP").files[0])

    }
    re.readAsText(this.files[0]);

})

function fun(){
    var worker = new Worker('worker.js');

    worker.onmessage = (mssg) => {
    
        console.log("Main",mssg)
         worker.terminate()
    }
    worker.postMessage("sum")
}




