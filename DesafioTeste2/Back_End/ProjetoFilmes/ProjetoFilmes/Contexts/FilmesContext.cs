﻿using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace ProjetoFilmes.Domains
{
    public partial class FilmesContext : DbContext
    {
        public FilmesContext()
        {
        }

        public FilmesContext(DbContextOptions<FilmesContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Filmes> Filmes { get; set; }
        public virtual DbSet<Generos> Generos { get; set; }
        public virtual DbSet<Usuarios> Usuarios { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
//#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                //optionsBuilder.UseSqlServer("Data Source=LAPTOP-7C6K4DAQ\\SQLEXPRESS; Initial Catalog=Filmes; Integrated Security=True");
                optionsBuilder.UseSqlServer("Data Source=BATCAVERNA\\SQLEXPRESS; Initial Catalog=Filmes; User Id=sa; pwd=gorgonzola@132");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Filmes>(entity =>
            {
                entity.HasKey(e => e.IdFilme);

                entity.HasIndex(e => e.Titulo)
                    .HasName("UQ__Filmes__7B406B562F85DB80")
                    .IsUnique();

                entity.Property(e => e.Titulo)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.HasOne(d => d.IdGeneroNavigation)
                    .WithMany(p => p.Filmes)
                    .HasForeignKey(d => d.IdGenero)
                    .HasConstraintName("FK__Filmes__IdGenero__286302EC");
            });

            modelBuilder.Entity<Generos>(entity =>
            {
                entity.HasKey(e => e.IdGenero);

                entity.HasIndex(e => e.Nome)
                    .HasName("UQ__Generos__7D8FE3B20115BF80")
                    .IsUnique();

                entity.Property(e => e.Nome)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Usuarios>(entity =>
            {
                entity.HasKey(e => e.IdUsuario);

                entity.HasIndex(e => e.Email)
                    .HasName("UQ__Usuarios__A9D105343A413C7A")
                    .IsUnique();

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.NomeUsuario)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Permissao)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Senha)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });
        }
    }
}
