
var title = 'Create a random turing machine';
var description = "Test your hearing range with this free, easy to use, online tool. See if you can hear 20hz all the way to 23khz! Compare yourself to other people your age and different species! "
var keywords = "hearing range,audible hearing range,normal hearing range in hz, hearing range by age, hearing range test, hearing range check, free online hearing range test"

exports.index = function(req, res){
  var params = { 
  	title: title,
  	description: description,
  	keywords: keywords,
  };

  res.render('index', params);

};

