USE CommercialNetwork
GO

INSERT INTO [Shop] (ShopName, [Address])
VALUES 
	('3RP OPERATING',			'9377 US HWY 30 SIDNEY, NE 69162 3227'),
	('AETNA',					'ONE TOWER SQUARE C/O TRAVELERS INDEMNITY HARTFORD, CT 06183 6014'),
	('AMAZON EXPLORATION LLC',	'PO BOX 63075 COLORADO SPRINGS, CO 80962 3075'),
	('BEREN CORP',				'2020 N BRAMBLEWOOD ST WICHITA, KS 67206 1094'),
	('BK DOUGLAS CTY',			'PO BOX 1150 CASTLE ROCK, CO 80104'),
	('CENTERRA ENERGY CORP',	'6174 E YALE AVENUE DENVER, CO 80222 7063'),
	('GREGORY, JD',				'115 W 2ND ST KIMBALL, NE 69145 1240'),
	('HRBEK, R. L.',			'PO BOX 159 MERINO, CO 80741 9802'),
	('MCCASLIN, GERALD L',		'1375 SUMMIT DR SIDNEY, NE 69162 2454'),
	('MTARRI, INC.',			'1511 WASHINGTON AVE GOLDEN, CO 80403 1919'),
	('ROBERTS, PAUL D',			'412 48TH ST RAPID CITY, SD 57702 1985'),
	('UNION INS CO',			'PO BOX 80439 LINCOLN, NE 68501 0439'),
	('Z & S CONSTRUCTION CO',	'PO BOX 310 KIMBALL, NE 69145 0310')
GO

INSERT INTO [Product] (ProductName, Price)
VALUES
	('Gas',			1000),
	('Potato',		20),
	('Diesel',		500),
	('Spaceship',	50000),
	('Sports car',	13000),
	('Basketball',	40),
	('Dreams',		1),
	('Pen',			5),
	('Gold',		2130),
	('Glasses',		30),
	('Notepad',		10)
GO


INSERT INTO[Order] (Quantity, OrderDate, Amount, FK_ShopID, FK_ProductID)
VALUES
	(10,	'10-08-2014',	10000,	1, 1),
	(50,	'10-08-2014',	250,	1, 8),
	(160,	'06-05-2015',	3200,	3, 2),
	(2,		'07-03-2016',	2000,	5, 1),
	(80,	'20-11-2014',	80,		6, 7),
	(73,	'07-12-2017',	2920,	6, 6),
	(90,	'15-01-2015',	180,	3, 2),
	(55,	'20-07-2015',	55,		13, 7),
	(10,	'10-02-2014',	500000,	12, 4),
	(35,	'05-10-2016',	1050,	10, 10),
	(62,	'30-01-2015',	1240,	9, 2),
	(53,	'30-01-2015',	53,		9, 7),
	(33,	'30-01-2015',	330,	9, 11),
	(89,	'19-06-2016',	44500,	2, 3),
	(13,	'19-06-2016',	27690,	4, 9),
	(1,		'19-06-2016',	2130,	7, 9),
	(9,		'11-02-2014',	117000,	4, 5),
	(51,	'21-02-2016',	663000,	8, 5),
	(36,	'12-12-2015',	18000,	8, 3),
	(73,	'12-12-2015',	73,		8, 7),
	(20,	'17-07-2017',	200,	11, 11),
	(20,	'03-01-2015',	400,	3,	2),
	(100,	'20-12-2014',	2000,	9,	2),
	(100,	'25-12-2014',	2000,	3,	2),
	(15,	'05-12-2014',	150,	11,	11)
GO
	
INSERT INTO [Customer] (CustomerName)
VALUES
	('Vasya'), ('Boroda'), ('Tutor'), ('Mafal'), ('Lupa'), ('Paparazi')
GO

INSERT INTO [ShopProductRelation] (FK_ShopID, FK_ProductID)
VALUES
	(1,		3),
	(1,		1),
	(1,		5),
	(2,		3),
	(2,		11),
	(3,		1),
	(3,		2),
	(3,		5),
	(4,		5),
	(4,		9),
	(5,		10),
	(5,		1),
	(5,		6),
	(6,		6),
	(6,		7),
	(7,		4),
	(7,		9),
	(7,		10),
	(8,		3),
	(8,		5),
	(8,		7),
	(9,		1),
	(9,		11),
	(9,		7),
	(10,	10),
	(11,	11),
	(12,	4),
	(12,	5),
	(13,	7)
GO

INSERT INTO [OrderCustomerRelation] (FK_OrderID, FK_CustomerID)
VALUES
	(1,		6),
	(2,		4),
	(3,		4),
	(4,		2),
	(5,		5),
	(6,		2),
	(7,		1),
	(8,		4),
	(9,		3),
	(10,	3),
	(11,	5),
	(12,	2),
	(13,	6),
	(14,	2),
	(15,	1),
	(16,	3),
	(17,	4),
	(18,	5),
	(19,	1),
	(20,	1),
	(21,	5),
	(22,	1),
	(23,	3),
	(24,	4),
	(25,	6)
GO