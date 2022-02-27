function kobetsuba_script(file){
 const $script=require('scriptjs');
 $script.path("https://chugakujyuken.kobetsuba.jp/js_includes/");
 return $script(file);
}

export default kobetsuba_script;
