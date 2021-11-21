using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SuspendedStorefront.Migrations
{
    public partial class CharityFields : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "CharityName",
                table: "Charities",
                newName: "PostalCode");

            migrationBuilder.AddColumn<DateTime>(
                name: "LastDelivery",
                table: "CharityProducts",
                type: "datetime(6)",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "Address1",
                table: "Charities",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "Address2",
                table: "Charities",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<Guid>(
                name: "AdministratorID",
                table: "Charities",
                type: "char(36)",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"),
                collation: "ascii_general_ci");

            migrationBuilder.AddColumn<string>(
                name: "City",
                table: "Charities",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "County",
                table: "Charities",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "Charities",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "PictureURL",
                table: "Charities",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<int>(
                name: "Status",
                table: "Charities",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_CharityProducts_CharityID",
                table: "CharityProducts",
                column: "CharityID");

            migrationBuilder.CreateIndex(
                name: "IX_CharityProducts_ProductID",
                table: "CharityProducts",
                column: "ProductID");

            migrationBuilder.CreateIndex(
                name: "IX_Charities_AdministratorID",
                table: "Charities",
                column: "AdministratorID");

            migrationBuilder.AddForeignKey(
                name: "FK_Charities_Customers_AdministratorID",
                table: "Charities",
                column: "AdministratorID",
                principalTable: "Customers",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_CharityProducts_Charities_CharityID",
                table: "CharityProducts",
                column: "CharityID",
                principalTable: "Charities",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_CharityProducts_Products_ProductID",
                table: "CharityProducts",
                column: "ProductID",
                principalTable: "Products",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Charities_Customers_AdministratorID",
                table: "Charities");

            migrationBuilder.DropForeignKey(
                name: "FK_CharityProducts_Charities_CharityID",
                table: "CharityProducts");

            migrationBuilder.DropForeignKey(
                name: "FK_CharityProducts_Products_ProductID",
                table: "CharityProducts");

            migrationBuilder.DropIndex(
                name: "IX_CharityProducts_CharityID",
                table: "CharityProducts");

            migrationBuilder.DropIndex(
                name: "IX_CharityProducts_ProductID",
                table: "CharityProducts");

            migrationBuilder.DropIndex(
                name: "IX_Charities_AdministratorID",
                table: "Charities");

            migrationBuilder.DropColumn(
                name: "LastDelivery",
                table: "CharityProducts");

            migrationBuilder.DropColumn(
                name: "Address1",
                table: "Charities");

            migrationBuilder.DropColumn(
                name: "Address2",
                table: "Charities");

            migrationBuilder.DropColumn(
                name: "AdministratorID",
                table: "Charities");

            migrationBuilder.DropColumn(
                name: "City",
                table: "Charities");

            migrationBuilder.DropColumn(
                name: "County",
                table: "Charities");

            migrationBuilder.DropColumn(
                name: "Name",
                table: "Charities");

            migrationBuilder.DropColumn(
                name: "PictureURL",
                table: "Charities");

            migrationBuilder.DropColumn(
                name: "Status",
                table: "Charities");

            migrationBuilder.RenameColumn(
                name: "PostalCode",
                table: "Charities",
                newName: "CharityName");
        }
    }
}
