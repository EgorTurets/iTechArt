USE CommercialNetwork
GO

ALTER TABLE [Order] ADD CONSTRAINT FK_Order_Shop
FOREIGN KEY (FK_ShopID) REFERENCES Shop(ShopID)
GO

ALTER TABLE [Order] ADD CONSTRAINT FK_Order_Product
FOREIGN KEY (FK_ProductID) REFERENCES Product(ProductID)
GO


ALTER TABLE [ShopProductRelation] ADD CONSTRAINT FK_ShopProductRelation_Shop
FOREIGN KEY (FK_ShopID) REFERENCES Shop(ShopID)
GO

ALTER TABLE [ShopProductRelation] ADD CONSTRAINT FK_ShopProductRelation_Product
FOREIGN KEY (FK_ProductID) REFERENCES Product(ProductID)
GO


ALTER TABLE [OrderCustomerRelation] ADD CONSTRAINT FK_OrderCustomerRelation_Order
FOREIGN KEY (FK_OrderID) REFERENCES [Order](OrderID)
GO

ALTER TABLE [OrderCustomerRelation] ADD CONSTRAINT FK_OrderCustomerRelation_Customer
FOREIGN KEY (FK_CustomerID) REFERENCES Customer(CustomerID)
GO