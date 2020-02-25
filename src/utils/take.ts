import html2canvas from "html2canvas";

function downloadImage(data:string,filename:string):void {
    var a:HTMLAnchorElement = document.createElement('a');
    a.href = data;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    }

function downContent(name:string="un.png"):void {
    html2canvas(document.getElementById("root")).then(function(canvas:HTMLCanvasElement){
    document.body.appendChild(canvas);
    /*var ctx = canvas.getContext("2d");*/
    canvas.getContext("2d");
    var myImage:string = canvas.toDataURL("image/png");
    downloadImage(myImage,name);
    }
)}
function pushContent(event){
    var input = event.target;
    var reader = new FileReader();
    reader.onload = function(){
    var text = reader.result;
    console.log(reader.result)};
    reader.readAsText(input.files[0]);
    var $root = document.getElementById("root");
    $root.innerHTML = reader.result.toString();
    downContent()
}