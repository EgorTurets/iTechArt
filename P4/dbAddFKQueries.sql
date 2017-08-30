USE CommercialNetwork
GO


IF (EXISTS(SELECT * FROM sys.foreign_keys WHERE name LIKE 'FK_Order_Shop'))
ALTER TABLE [Order] DROP CONSTRAINT FK_Order_Shop

ALTER TABLE [Order] ADD CONSTRAINT FK_Order_Shop
FOREIGN KEY (FK_ShopID) REFERENCES Shop(ShopID) ON DELETE CASCADE
GO


IF (EXISTS(SELECT * FROM sys.foreign_keys WHERE name LIKE 'FK_Order_Product'))
ALTER TABLE [Order] DROP CONSTRAINT FK_Order_Product

ALTER TABLE [Order] ADD CONSTRAINT FK_Order_Product
FOREIGN KEY (FK_ProductID) REFERENCES Product(ProductID) ON DELETE CASCADE
GO


IF (EXISTS(SELECT * FROM sys.foreign_keys WHERE name LIKE 'FK_ShopProductRelation_Shop'))
ALTER TABLE [ShopProductRelation] DROP CONSTRAINT FK_ShopProductRelation_Shop

ALTER TABLE [ShopProductRelation] ADD CONSTRAINT FK_ShopProductRelation_Shop
FOREIGN KEY (FK_ShopID) REFERENCES Shop(ShopID) ON DELETE CASCADE
GO


IF (EXISTS(SELECT * FROM sys.foreign_keys WHERE name LIKE 'FK_ShopProductRelation_Product'))
ALTER TABLE [ShopProductRelation] DROP CONSTRAINT FK_ShopProductRelation_Product

ALTER TABLE [ShopProductRelation] ADD CONSTRAINT FK_ShopProductRelation_Product
FOREIGN KEY (FK_ProductID) REFERENCES Product(ProductID) ON DELETE CASCADE
GO


IF (EXISTS(SELECT * FROM sys.foreign_keys WHERE name LIKE 'FK_OrderCustomerRelation_Order'))
ALTER TABLE [OrderCustomerRelation] DROP CONSTRAINT FK_OrderCustomerRelation_Order

ALTER TABLE [OrderCustomerRelation] ADD CONSTRAINT FK_OrderCustomerRelation_Order
FOREIGN KEY (FK_OrderID) REFERENCES [Order](OrderID) ON DELETE CASCADE
GO


IF (EXISTS(SELECT * FROM sys.foreign_keys WHERE name LIKE 'FK_OrderCustomerRelation_Customer'))
ALTER TABLE [OrderCustomerRelation] DROP CONSTRAINT FK_OrderCustomerRelation_Customer

ALTER TABLE [OrderCustomerRelation] ADD CONSTRAINT FK_OrderCustomerRelation_Customer
FOREIGN KEY (FK_CustomerID) REFERENCES Customer(CustomerID) ON DELETE CASCADE
GO