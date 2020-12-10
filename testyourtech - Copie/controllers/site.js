index = (req, res, next) => {
    res.status(201);
    res.render('index');
}

module.exports = index;