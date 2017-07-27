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
SELECT Jan2015.ProductName
FROM (
	SELECT Product.ProductID, Product.ProductName, SUM([Order].Quantity) AS Quantity
	FROM Product LEFT JOIN [Order] ON Product.ProductID = [Order].FK_ProductID
	WHERE MONTH([Order].OrderDate) = 1 AND YEAR([Order].OrderDate) = 2015
	GROUP BY Product.ProductID, Product.ProductName) AS Jan2015
	FULL JOIN (
	SELECT  Product.ProductID, Product.ProductName, SUM([Order].Quantity) AS Quantity
	FROM Product INNER JOIN [Order] ON Product.ProductID = [Order].FK_ProductID
	WHERE MONTH([Order].OrderDate) = 12 AND YEAR([Order].OrderDate) = 2014
	GROUP BY Product.ProductID, Product.ProductName) AS Dec2014
	ON Jan2015.ProductID = Dec2014.ProductID
	--RIGHT JOIN Product ON Jan2015.ProductID = Product.ProductID
WHERE Jan2015.Quantity < Dec2014.Quantity OR Jan2015.ProductID <> Dec2014.ProductID





SELECT [Order].FK_ProductID, COUNT([Order].Quantity) AS Quantity, YMParse.[Month], YMParse.[Year]	
FROM [Order] INNER JOIN (
	SELECT Product.ProductID, [Order].FK_ProductID, MONTH([Order].OrderDate) AS [Month], YEAR([Order].OrderDate) AS [Year]
	FROM [Order] FULL JOIN Product ON [Order].FK_ProductID = Product.ProductID
	WHERE MONTH([Order].OrderDate) = 1 AND YEAR([Order].OrderDate) = 2015
	) AS YMParse ON [Order].FK_ProductID = YMParse.FK_ProductID
GROUP BY YMParse.[Month], [Year], [Order].FK_ProductID

SELECT * FROM [Order]

SELECT [Order].FK_ProductID, MONTH([Order].OrderDate) AS [Month], YEAR([Order].OrderDate) AS [Year]
	FROM [Order]





/*Problem 7*/
SELECT Shop.ShopName, AVG(Product.Price) AS [Average Price]
FROM Shop INNER JOIN ShopProductRelation ON Shop.ShopID = ShopProductRelation.FK_ShopID
	INNER JOIN Product ON ShopProductRelation.FK_ProductID = Product.ProductID
GROUP BY Shop.ShopName

/*Problem 8*/
