          var i = 0;
  var images = [];
  var time = 3000;
  // Images List
  images[0]="img/a.jpg";
  images[1]="img/b.jpg";
  images[2]="img/c.jpg";
  images[3]="img/d.jpg";
  images[4]="img/e.jpg";
  images[5]="img/f.jpg";
  // Image Changing
  function changeImg(){
    document.slide.src=images[i];
    if(i < images.length-1){
      i++;
    }else{
      i=0;
    }
  setTimeout("changeImg()",time);
  } 
  window.onload = changeImg;
