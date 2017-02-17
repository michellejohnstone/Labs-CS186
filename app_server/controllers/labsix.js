/* GET page one */
module.exports.pageone = function(req, res){
  res.render('html1', { title: 'pageone' });

};

/* GET page two */
module.exports.pagetwo = function(req, res){
  res.render('html2', { title: 'pagetwo' });

};
