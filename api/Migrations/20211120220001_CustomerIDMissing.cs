using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SuspendedStorefront.Migrations
{
    public partial class CustomerIDMissing : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "CustomerID",
                table: "ProductSubscriptions",
                type: "char(36)",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"),
                collation: "ascii_general_ci");

            migrationBuilder.CreateIndex(
                name: "IX_ProductSubscriptions_CustomerID",
                table: "ProductSubscriptions",
                column: "CustomerID");

            migrationBuilder.CreateIndex(
                name: "IX_ProductSubscriptions_ProductID",
                table: "ProductSubscriptions",
                column: "ProductID");

            migrationBuilder.AddForeignKey(
                name: "FK_ProductSubscriptions_Customers_CustomerID",
                table: "ProductSubscriptions",
                column: "CustomerID",
                principalTable: "Customers",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ProductSubscriptions_Products_ProductID",
                table: "ProductSubscriptions",
                column: "ProductID",
                principalTable: "Products",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ProductSubscriptions_Customers_CustomerID",
                table: "ProductSubscriptions");

            migrationBuilder.DropForeignKey(
                name: "FK_ProductSubscriptions_Products_ProductID",
                table: "ProductSubscriptions");

            migrationBuilder.DropIndex(
                name: "IX_ProductSubscriptions_CustomerID",
                table: "ProductSubscriptions");

            migrationBuilder.DropIndex(
                name: "IX_ProductSubscriptions_ProductID",
                table: "ProductSubscriptions");

            migrationBuilder.DropColumn(
                name: "CustomerID",
                table: "ProductSubscriptions");
        }
    }
}
