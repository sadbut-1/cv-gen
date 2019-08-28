var app = require('./config/server');
var resume = require('./models/curriculo')();

require('./routes/api')(app);

//Levanta o servidor Http na porta 3000 via Express
app.listen(3000, function() {
    console.log('Servidor rodando com express na porta 3000')
});