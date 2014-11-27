/* archivo de definicion de tpl */
/* python -m SimpleHTTPServer 8000 */
$(document).ready(function(){
loadTpl('index', 'home', 'body');
//loadTpl('head', 'head', 'head');
});

function loadTpl(namejson, nametpl, divinsert) {
  loadJSON(namejson, function(data, err){
    getTpl(nametpl, data,function(output, err){
       $('#'+divinsert).html(output);
    });
  });
}


function getTpl(name, context, callback){
  $.ajax({
    url: "html/"+name+".html",
    dataType: "html",
    cache:true,
    success: function(data){
      var tpl = Handlebars.compile(data);
      output = tpl(context);
      callback(output,null);
    },
    error: function(err){
      callback(null, err)
    }
  });
}

function loadJSON(name, callback) {
  $.ajax({
   dataType: "json",
   url: "js/json/"+name+ ".json",
   cache: true,
   success: function(data){
    callback(data, null);
   },
   error: function(err){
    callback(null, err)
   }
  });

}

