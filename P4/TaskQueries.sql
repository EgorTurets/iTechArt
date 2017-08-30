USE CommercialNetwork
GO

/*Problem 1*/
SELECT * FROM Product


/*Problem 2*/
SELECT ProductID, ProductName FROM Product 
WHERE Price <= 500


/*Problem 3*/
SELECT AVG(Amount) FROM [Order]
WHERE OrderDate > '01-01-2015' AND OrderDate < '01-31-2015'


/*Problem 4*/
SELECT Product.ProductName, DATEDIFF(YEAR, [Order].OrderDate, GETDATE()) AS Age
FROM Product INNER JOIN [Order] ON Product.ProductID = [Order].FK_ProductID
WHERE Product.Price = (SELECT MAX(Price) FROM Product)


/*Problem 5*/
SELECT DISTINCT Product.ProductName
FROM Product INNER JOIN [Order] ON Product.ProductID = [Order].FK_ProductID
WHERE [Order].OrderDate > '01-01-2015' AND [Order].OrderDate < '01-31-2015'


/*Problem 6*/
SELECT Dec2014.ProductName
FROM (
	SELECT Product.ProductID, Product.ProductName, SUM([Order].Quantity) AS Quantity
	FROM Product FULL JOIN [Order] ON Product.ProductID = [Order].FK_ProductID
	WHERE MONTH([Order].OrderDate) = 1 AND YEAR([Order].OrderDate) = 2015
	GROUP BY Product.ProductID, Product.ProductName) AS Jan2015
FULL JOIN (
	SELECT  Product.ProductID, Product.ProductName, SUM([Order].Quantity) AS Quantity
	FROM Product INNER JOIN [Order] ON Product.ProductID = [Order].FK_ProductID
	WHERE MONTH([Order].OrderDate) = 12 AND YEAR([Order].OrderDate) = 2014
	GROUP BY Product.ProductID, Product.ProductName) AS Dec2014
	ON Jan2015.ProductID = Dec2014.ProductID
WHERE Jan2015.Quantity < Dec2014.Quantity OR Jan2015.Quantity IS NULL


/*Problem 7*/
SELECT Shop.ShopName, AVG(Product.Price) AS [Average Price]
FROM Shop INNER JOIN ShopProductRelation ON Shop.ShopID = ShopProductRelation.FK_ShopID
	INNER JOIN Product ON ShopProductRelation.FK_ProductID = Product.ProductID
GROUP BY Shop.ShopName


/*Problem 8*/
SELECT Shop.ShopName, Sales.SumAmount
FROM (
	SELECT Shop.ShopID, Shop.ShopName, SUM([Order].Amount) AS SumAmount, YEAR([Order].OrderDate) AS OrderYear
	FROM Shop INNER JOIN [Order] ON Shop.ShopID = [Order].FK_ShopID
	WHERE YEAR([Order].OrderDate) = 2015
	GROUP BY Shop.ShopID, Shop.ShopName, YEAR([Order].OrderDate)
	) AS Sales
FULL OUTER JOIN Shop ON Sales.ShopID = Shop.ShopID


/*Problem 9*/
SELECT Customer.CustomerName, CustomerPurchases.OrderSum
FROM Customer INNER JOIN (
	SELECT OrderCustomerRelation.FK_CustomerID AS CustomerID, SUM([Order].Amount) AS OrderSum
	FROM OrderCustomerRelation INNER JOIN [Order] ON OrderCustomerRelation.FK_OrderID = [Order].OrderID
	WHERE YEAR([Order].OrderDate) = 2014
	GROUP BY OrderCustomerRelation.FK_CustomerID
) AS CustomerPurchases ON Customer.CustomerID = CustomerPurchases.CustomerID
WHERE CustomerPurchases.OrderSum >= 1000000


/*Problem 10*/
UPDATE Product 
SET Product.Price = Product.Price * 1.5
WHERE Product.Price <= 100


/*Problem 11*/
DELETE FROM [Order]
WHERE YEAR([Order].OrderDate) <= 2014