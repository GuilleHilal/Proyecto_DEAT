using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Datos
{
    public class GestorPedidos
    {

        public static void Grabar(Compra compra, IEnumerable<DetalleCompra> detalles, PagoPedido pago, Entrega entrega)
        {

            DeliverEatEntities db = new DeliverEatEntities();
            compra.fechaHora = DateTime.Today;
            db.Compras.Add(compra);
            db.SaveChanges();

            Compra compr = db.Compras.OrderByDescending(x => x.idPedido).First();
            Console.Write(compr);
            
            for (var i = 0; i < detalles.Count(); i++) {
                DetalleCompra detalle = detalles.ToList().ElementAt(i);
                detalle.idPedido = compr.idPedido;
                db.DetalleCompras.Add(detalle);
            }
            pago.idPedido = compr.idPedido;
            db.PagoPedidoes.Add(pago);
            entrega.idPedido = compr.idPedido;
            db.Entregas.Add(entrega);
            
            db.SaveChanges();
        }
    }
}
