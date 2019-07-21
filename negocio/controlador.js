var consultas = require("../acceso a datos/consultas");

//consultar, traer y redirigir datos a la vista.
exports.consultaDatos = function (req, res) {
	var sql = 'select * from animales';
	consultas.traerDatos(sql, function (err, result) {
		res.send(result)
		console.log({ Data: result })
	});
}

//insercion de datos en la BD
exports.insertar = (req, res) => {
	const data = req.body
	var sql = 'INSERT INTO animales SET?'
	consultas.agregarData(sql, data)
	//res.redirect("/")
	res.send("Datos insertados")
}



//eliminacionde datos de la BD
exports.borrar = function (req, res) {
	var ID = req.params.id
	var sql = 'DELETE FROM animales WHERE id = ?'
	consultas.eliminar(sql, ID);
	//res.redirect("/")
	res.send("borrado exitoso")
}

//modificacion de datos
exports.editar = function (req, res) {
	var ID = req.params.id
	var sql = 'select * from animales where id = ?'
	consultas.editar(sql, ID, function (err, result) {
		res.send(result[0])
		//res.render("resultadosEditar", { Data: result[0]})
	})
}

//actualizacion de datos
exports.actualiza = function (req, res) {
	const data = req.body;
	var ID = req.params.id;
	var sql = 'UPDATE animales set ? where id = ?'
	consultas.actualizar(sql, data, ID);
	//res.redirect("/")
	res.send("actualizacion exitosa")
}
