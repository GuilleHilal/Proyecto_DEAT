var app = angular.module("app", []);
app.controller("compraController", function ($scope, $http) {
    $scope.titulo = "Delivery Eat";
    $scope.carrito = [{ idProducto: 1, idComercio: 1,  nombre: "Lomito XL", descripcion: "Un gran lomo de 1 metro de longitud", precio: 50, cantidad: 1 },
        { idProducto: 2, idComercio: 1, nombre: "Hamburguesa", descripcion: "Una hamburguesa deliciosa para tu estomago", precio: 500, cantidad: 1 },
        { idProducto: 3, idComercio: 1, nombre: "Sushi", descripcion: "Pescado crudo", precio: 1500, cantidad: 1}];


    $scope.detalle = [];

    $scope.crearDetalle = function () {
        $scope.carrito.forEach(function (producto) {
            $scope.detalle.push({ idPedido: null, idProducto: producto['idProducto'], idComercio: producto['idComercio'], precioUnitario: producto['precio'], cantidad: producto['cantidad'] });
        });


    };


    $scope.hora = null;
    $scope.minutos = null;
    $scope.crearDetalle();
    console.log($scope.detalle);
    $scope.compra = {};
    $scope.entrega = {};
    $scope.pago = {};
   
    $scope.pago.idTipoPago = null
    $scope.entrega.idTipoEntrega = 1;
    $scope.compra.email = null;
    $scope.compra.depto = null;
    $scope.compra.piso = null;
    $scope.valorTotal = 0;
    $scope.calcularTotal = function () {

       

        for (var i = 0; i < $scope.carrito.length; i++) {
            $scope.valorTotal += $scope.carrito[i].precio;
        }
        
    };

    
    $scope.calcularTotal();
    $scope.compra.total = $scope.valorTotal;
    $scope.confirmar = false;
    $scope.pago.monto = null;
    $scope.validar = true;

    $scope.mostrarPedido = function () {

    };

    $scope.cancelar = function () {
        $scope.carrito = [];
        $scope.detalle = [];
        $scope.compra = {};
        $scope.pago = {};
        $scope.entrega = {};
        $scope.valorTotal = 0;
        $scope.confirmar = false;
        $('#myForm').attr('class', 'needs-validation')

    }

    $scope.agregar = function () {

        try {
            if ($scope.entrega.idTipoEntrega == 2) {
                $scope.entrega.horaEntrega = document.getElementById('inputTime').value;
                console.log('aqui toy')
                console.log($scope.entrega.horaEntrega);

            }
            else {
                $scope.entrega.horaEntrega = null
            }
        }
        catch (ex) { }

        if ($('#firstName').val() == '') {
            alert('Ingrese primer nombre');
            $scope.validar = false;
        }

        if (!$scope.validar) {
            $scope.validar = true;
            return;
        }

        if ($('#lastName').val() == '') {
            alert('Ingrese apellido');
            $scope.validar = false;
        }

        if (!$scope.validar) {
            $scope.validar = true;
            return;
        }

        if ($('#neighbour').val() == '') {
            alert('Ingrese barrio');
            $scope.validar = false;
        }

        if (!$scope.validar) {
            $scope.validar = true;
            return;
        }

        if ($('#address').val() == '') {
            alert('Ingrese direccion');
            $scope.validar = false;
        }

        if (!$scope.validar) {
            $scope.validar = true;
            return;
        }

        if ($('#number').val() == '') {
            alert('Ingrese numero de direccion');
            $scope.validar = false;
        }

        if (!$scope.validar) {
            $scope.validar = true;
            return;
        }

        if ($scope.entrega.idTipoEntrega == 2) {
            if ($scope.entrega.horaEntrega == null || $scope.entrega.horaEntrega == '') {
                alert("Seleccione una hora correcta");
                $scope.validar = false;

            }
        }

        if (!$scope.validar) {
            $scope.validar = true;
            return;
        }

        if ($scope.pago.idTipoPago == null) {
            alert('Seleccione forma de pago');
            $scope.validar = false;
        }

        if (!$scope.validar) {
            $scope.validar = true;
            return;
        }


        if ($scope.pago.idTipoPago == 1) {
            if ($scope.pago.monto < $scope.valorTotal) {
                alert('Ingrese correctamente el monto');
                $('#monto').attr('class', 'form-control soloNumero is-invalid border-danger');
                $scope.validar = false;
            }
        }

        if (!$scope.validar) {
            $scope.validar = true;
            return;
        }

        if ($scope.pago.idTipoPago == 2) {
            if ($('#cc-name').val() == '' || $('#cc-number').val() == '' || $('#cc-cvv').val() == '') {
                alert('Ingrese correctamente los datos de la tarjeta');
                $scope.validar = false;
            }
            
        }

        if (!$scope.validar) {
            $scope.validar = true;
            return;
        }

        if ($scope.pago.idTipoPago == 2) {
            if ($('#cc-number').val().length < 16) {
                alert('El número de la tarjeta debe contener 16 numeros');
                $('#cc-number').attr('class', 'form-control is-invalid border-danger')
                $scope.validar = false;
            }
            else {
                $('#cc-number').attr('class', 'form-control is-valid border-success')
            }

        }

        if (!$scope.validar) {
            $scope.validar = true;
            return;
        }

        if ($scope.pago.idTipoPago == 2) {
            if ($('#cc-cvv').val().length < 3) {
                alert('El número de seguridad debe contener 3 numeros');
                $('#cc-cvv').attr('class', 'form-control is-invalid border-danger')
                $scope.validar = false;
            }
            else {
                $('#cc-cvv').attr('class', 'form-control is-valid border-success')
            }

        }

        if (!$scope.validar) {
            $scope.validar = true;
            return;
        }

        if ($scope.pago.idTipoPago == 2) {
            if ($('#cc-expiration').val().length < 5) {
                alert('La fecha de expiración debe ser ingresada correctamente');
                $('#cc-expiration').attr('class', 'form-control is-invalid border-danger')
                $scope.validar = false;
            }
            else {
                $('#cc-expiration').attr('class', 'form-control is-valid border-success')
            }

        }

        if (!$scope.validar) {
            $scope.validar = true;
            return;
        }

        if ($scope.validar) { 
        var datos = { compra: $scope.compra, detalle: $scope.detalle, entrega: $scope.entrega, pago: $scope.pago };

        $http.post("/api/Plantilla", angular.toJson(datos)).then(function (response) {
            if (response) {
                
                $scope.mostrarPedido();
            }

            });
        }

        $scope.confirmar = true;
    }

});