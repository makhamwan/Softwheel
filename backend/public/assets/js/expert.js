var varaityName = ""
$.getJSON( "128.199.192.241:8888/provinces/", function( data ) {
      for(var i = 0; i<data.provinces.length;i++){
     $('#provinces').append('<option value="'+
                                data.provinces[i].name+
                                '">'+data.provinces[i].name+'</option>')
  }
});

$.getJSON( "128.199.192.241:8888/rices/", function( data ) {
  for(var i = 0; i<data.rices.length;i++){
     $('#rice-varaity').append('<option onclick=setVaraity('+data.rices[i].name+') value="'+
                                data.rices[i].name+
                                '">'+data.rices[i].name+'</option>')
  }
});


function provicesList(){
  console.log(varaityName);
  var provinces = $('#provinces');

  $.getJSON( "http://private-e268a-softwheel.apiary-mock.com/rice"+varaityName, function( data ) {
    provinces.empty()
    provinces.append('<option value="">Select Provice</option>')
    for(var i = 0; i<data.provinces.length;i++){
       $('#provinces').append('<option value="'+
                                  data.provinces[i].name+
                                  '">'+data.provinces[i].name+'</option>')
    }
  });
}

function setVaraity(){
  var e = document.getElementById("rice-varaity");
  var name = e.options[e.selectedIndex].value;
  varaityName = "/"+name
  provicesList()
}
