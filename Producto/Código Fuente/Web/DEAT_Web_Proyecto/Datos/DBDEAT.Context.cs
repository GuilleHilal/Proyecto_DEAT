﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Datos
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class DeliverEatEntities : DbContext
    {
        public DeliverEatEntities()
            : base("name=DeliverEatEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<Compra> Compras { get; set; }
        public virtual DbSet<DetalleCompra> DetalleCompras { get; set; }
        public virtual DbSet<Entrega> Entregas { get; set; }
        public virtual DbSet<PagoPedido> PagoPedidoes { get; set; }
        public virtual DbSet<TipoEntrega> TipoEntregas { get; set; }
        public virtual DbSet<TipoPago> TipoPagoes { get; set; }
    }
}
