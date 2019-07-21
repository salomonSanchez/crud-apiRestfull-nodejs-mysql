const mysql = require('mysql')
const url = require('../negocio/confDatabase')

const dbConection = mysql.createConnection(url.urlMySql)

//consulta
exports.traerDatos = function (sql, callback) {
	dbConection.query(sql, function (err, result) {
		if (err) throw err;
		else callback(err, result)
	})
}
//insert
exports.agregarData = function (sql, data) {
	dbConection.query(sql, [data], function (err, result) {
		if (err) throw err;
		else console.log("datos insertados")
	})
}

//eliminar
exports.eliminar = function (sql, ID) {
	dbConection.query(sql, [ID], function (err, resul) {
		if (err) throw err;
		else console.log("datos borrados")
	})
}

//editar
exports.editar = function (sql, ID, callback) {
	dbConection.query(sql, [ID], function (err, result) {
		if (err) throw err;
		else callback(err, result)
	})
}

//actualizar
exports.actualizar = function (sql, data, ID) {
	dbConection.query(sql, [data, ID], function (err, resul) {
		if (err) throw err;
		else console.log("datos actualizados")
	})
}
