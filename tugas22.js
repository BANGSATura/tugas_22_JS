function tugas22() {
  var kalimat = "Saya ingin belajar bersama";
  var data = kalimat.split(" ");
  data.forEach(function(item,index,array){
    console.log("Item : ",item," Index ke ",index);
  });
}
tugas22();
