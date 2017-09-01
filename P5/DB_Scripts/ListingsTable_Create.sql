USE [Resume_iTechArt]
GO

/****** Object:  Table [dbo].[Listings]    Script Date: 01.09.2017 13:41:26 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Listings](
	[ListingID] [int] IDENTITY(1,1) NOT NULL,
	[Title] [nvarchar](50) NOT NULL,
	[Description] [nvarchar](200) NULL,
	[Metric] [float] NOT NULL,
	[Address] [nvarchar](100) NOT NULL,
	[Price] [money] NOT NULL,
	[ForRent] [bit] NOT NULL,
	[ProprietorID] [int] NOT NULL,
 CONSTRAINT [PK_Listings] PRIMARY KEY CLUSTERED 
(
	[ListingID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[Listings]  WITH CHECK ADD  CONSTRAINT [FK_Listings_Users] FOREIGN KEY([ProprietorID])
REFERENCES [dbo].[Users] ([UserID])
GO

ALTER TABLE [dbo].[Listings] CHECK CONSTRAINT [FK_Listings_Users]
GO

