﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using SuspendedStorefront.Models;

#nullable disable

namespace SuspendedStorefront.Migrations
{
    [DbContext(typeof(StoreDbContext))]
    partial class StoreDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("SuspendedStorefront.Models.Charity", b =>
                {
                    b.Property<Guid>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("char(36)");

                    b.Property<string>("CharityName")
                        .HasColumnType("longtext");

                    b.Property<bool>("IsActive")
                        .HasColumnType("tinyint(1)");

                    b.HasKey("ID");

                    b.ToTable("Charities");
                });

            modelBuilder.Entity("SuspendedStorefront.Models.CharityProduct", b =>
                {
                    b.Property<Guid>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("char(36)");

                    b.Property<Guid>("CharityID")
                        .HasColumnType("char(36)");

                    b.Property<bool>("IsActive")
                        .HasColumnType("tinyint(1)");

                    b.Property<Guid>("ProductID")
                        .HasColumnType("char(36)");

                    b.Property<int>("WeeklyQuantity")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.ToTable("CharityProducts");
                });

            modelBuilder.Entity("SuspendedStorefront.Models.Customer", b =>
                {
                    b.Property<Guid>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("char(36)");

                    b.Property<string>("Address1")
                        .HasColumnType("longtext");

                    b.Property<string>("Address2")
                        .HasColumnType("longtext");

                    b.Property<string>("City")
                        .HasColumnType("longtext");

                    b.Property<string>("County")
                        .HasColumnType("longtext");

                    b.Property<bool>("IsActive")
                        .HasColumnType("tinyint(1)");

                    b.Property<string>("Name")
                        .HasColumnType("longtext");

                    b.Property<string>("PostalCode")
                        .HasColumnType("longtext");

                    b.HasKey("ID");

                    b.ToTable("Customers");
                });

            modelBuilder.Entity("SuspendedStorefront.Models.Product", b =>
                {
                    b.Property<Guid>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("char(36)");

                    b.Property<bool>("IsActive")
                        .HasColumnType("tinyint(1)");

                    b.Property<string>("Name")
                        .HasColumnType("longtext");

                    b.Property<decimal>("Price")
                        .HasColumnType("decimal(65,30)");

                    b.HasKey("ID");

                    b.ToTable("Products");
                });

            modelBuilder.Entity("SuspendedStorefront.Models.ProductSubscription", b =>
                {
                    b.Property<Guid>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("char(36)");

                    b.Property<int>("FridayQuantity")
                        .HasColumnType("int");

                    b.Property<bool>("IsActive")
                        .HasColumnType("tinyint(1)");

                    b.Property<int>("MaxSuspendedQuantity")
                        .HasColumnType("int");

                    b.Property<int>("MondayQuantity")
                        .HasColumnType("int");

                    b.Property<Guid>("PreviousSubscriptionID")
                        .HasColumnType("char(36)");

                    b.Property<Guid>("ProductID")
                        .HasColumnType("char(36)");

                    b.Property<Guid>("RecurringBasketID")
                        .HasColumnType("char(36)");

                    b.Property<int>("SaturdayQuantity")
                        .HasColumnType("int");

                    b.Property<int>("SundayQuantity")
                        .HasColumnType("int");

                    b.Property<int>("ThursdayQuantity")
                        .HasColumnType("int");

                    b.Property<int>("TuesdayQuantity")
                        .HasColumnType("int");

                    b.Property<int>("WednesdayQuantity")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.ToTable("ProductSubscriptions");
                });

            modelBuilder.Entity("SuspendedStorefront.Models.ProductSubscriptionReceipt", b =>
                {
                    b.Property<Guid>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("char(36)");

                    b.Property<string>("Address1")
                        .HasColumnType("longtext");

                    b.Property<string>("Address2")
                        .HasColumnType("longtext");

                    b.Property<int>("CharityQtyFulfilled")
                        .HasColumnType("int");

                    b.Property<string>("City")
                        .HasColumnType("longtext");

                    b.Property<string>("County")
                        .HasColumnType("longtext");

                    b.Property<int>("CustomerQtyFulfilled")
                        .HasColumnType("int");

                    b.Property<string>("PostalCode")
                        .HasColumnType("longtext");

                    b.Property<Guid>("ProductSubscriptionID")
                        .HasColumnType("char(36)");

                    b.HasKey("ID");

                    b.ToTable("ProductSubscriptionReceipts");
                });
#pragma warning restore 612, 618
        }
    }
}
