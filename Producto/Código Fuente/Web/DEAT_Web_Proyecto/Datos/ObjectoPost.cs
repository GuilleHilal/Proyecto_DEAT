using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Datos
{
    public class ObjectoPost
    {
        public Compra compra { get; set; }
        public IEnumerable<DetalleCompra> detalle { get; set; }
        public Entrega entrega { get; set; }
        public PagoPedido pago { get; set; }

    }
}
