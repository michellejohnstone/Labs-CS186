/* GET page one */
module.exports.index = function(req, res){
  res.render('html1', { title: 'pageone' });

};

/* GET page two */
module.exports.index = function(req, res){
  res.render('html2', { title: 'pagetwo' });

};
