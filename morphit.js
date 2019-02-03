function morphit(config){
    //console.log(config);
    var animation = config.animate || 'flipInX';
    var interval = config.interval || 4000;
    var morphid = config.morphid || '#morphit';
    var seperator = config.seperator || ',';
    var el = document.querySelector(morphid);
    var eltext = el.innerHTML;
    var ela = eltext.split(seperator);
    var total = ela.length;
    i = 0;
    setInterval(function () {
      if(i == total){
        i = 0;
      }

      var span = '<span class="animated '+ animation +'"> '+ ela[i].trim() +' </span>';
      el.innerHTML = span;
      animateCss(morphid + " .animated ",animation,'fadeOutLeft');

      i++;
    }, interval);
    }
