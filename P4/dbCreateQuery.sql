USE master
GO

CREATE DATABASE CommercialNetwork
GO

USE CommercialNetwork
GO

/*Product table*/
CREATE TABLE [dbo].[Product](
	[ProductID][int]IDENTITY(1,1) NOT NULL,
	[ProductName][nvarchar](50) NOT NULL,
	[Price][money],
	PRIMARY KEY CLUSTERED ([ProductID])
)
GO

/*Shop table*/
CREATE TABLE [dbo].[Shop](
	[ShopID] [int] IDENTITY(1,1) NOT NULL,
	[ShopName] [nvarchar](100) NOT NULL,
	[Address] [nvarchar](100) NOT NULL,
	PRIMARY KEY CLUSTERED ([ShopID])
)
GO

/*Order table*/
CREATE TABLE [dbo].[Order](
	[OrderID] [int] IDENTITY(1,1) NOT NULL,
	[Quantity] [int] NOT NULL,
	[OrderDate] [date],
	[Amount] [money] NOT NULL,
	PRIMARY KEY CLUSTERED ([OrderID])
)
GO

/*FK for Order(many)<->Product(one)*/
/*FK for Order(many)<->Shop(one)*/
ALTER TABLE [Order] ADD 
	[FK_ShopID] [int] NOT NULL,
	[FK_ProductID] [int] NOT NULL
GO

ALTER TABLE [Order] ADD CONSTRAINT FK_Order_Shop
FOREIGN KEY (FK_ShopID) REFERENCES Shop(ShopID)
GO

ALTER TABLE [Order] ADD CONSTRAINT FK_Order_Product
FOREIGN KEY (FK_ProductID) REFERENCES Product(ProductID)
GO

/*Customer table*/
CREATE TABLE [dbo].[Customer](
	[CustomerID] [int] IDENTITY(1,1) NOT NULL,
	[CustomerName] [nvarchar](100) NOT NULL,
	PRIMARY KEY CLUSTERED ([CustomerID])
)
GO

/*Table for relationship Shop(many)<->Product(many)*/
CREATE TABLE [dbo].[ShopProductRelation](
	[FK_ShopID] [int] NOT NULL,
	[FK_ProductID] [int] NOT NULL
)
GO

ALTER TABLE [ShopProductRelation] ADD CONSTRAINT FK_ShopProductRelation_Shop
FOREIGN KEY (FK_ShopID) REFERENCES Shop(ShopID)
GO

ALTER TABLE [ShopProductRelation] ADD CONSTRAINT FK_ShopProductRelation_Product
FOREIGN KEY (FK_ProductID) REFERENCES Product(ProductID)
GO

/*Table for relationship Order(many)<->Customer(many)*/
CREATE TABLE [dbo].[OrderCustomerRelation](
	[FK_OrderID] [int] NOT NULL,
	[FK_CustomerID] [int] NOT NULL
)
GO

ALTER TABLE [OrderCustomerRelation] ADD CONSTRAINT FK_OrderCustomerRelation_Order
FOREIGN KEY (FK_OrderID) REFERENCES [Order](OrderID)
GO

ALTER TABLE [OrderCustomerRelation] ADD CONSTRAINT FK_OrderCustomerRelation_Customer
FOREIGN KEY (FK_CustomerID) REFERENCES Customer(CustomerID)
GO