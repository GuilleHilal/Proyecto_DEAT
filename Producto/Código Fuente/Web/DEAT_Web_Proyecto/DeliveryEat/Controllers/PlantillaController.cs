using Datos;
using System;
using System.Collections.Generic;

using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;


namespace DeliveryEat.Controllers
{
    public class PlantillaController : ApiController
    {

        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        public bool Post(ObjectoPost objeto) {
            Compra compra = objeto.compra;
            IEnumerable<DetalleCompra> detalle = objeto.detalle;
            PagoPedido pago = objeto.pago;
            Entrega entrega = objeto.entrega;
            GestorPedidos.Grabar(compra, detalle, pago, entrega);
            return true;
        }
          
       

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }

}

