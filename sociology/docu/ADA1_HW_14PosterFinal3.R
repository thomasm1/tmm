## ------------------------------------------------------------------------
# I set some GLOBAL R chunk options here.
#   (to hide this message add "echo=FALSE" to the code chunk options)
# In particular, see the fig.height and fig.width (in inches)
#   and notes about the cache option.
knitr::opts_chunk$set(comment = NA, message = FALSE, warning = FALSE, width = 100)
knitr::opts_chunk$set(fig.align = "center", fig.height = 4, fig.width = 6)
# Note: The "cache=TRUE" option will save the computations of code chunks
#   so R it doesn't recompute everything every time you recompile.
#   This can save tons of time if you're working on a small section of code
#   at the bottom of the document.
#   Code chunks will be recompiled if they are edited.
#   The autodep=TRUE will also update dependent code chunks.
#   A folder is created with the cache in it -- if you delete the folder, then
#   all the code chunks will recompute again.  I delete this folder when I want
#   to make sure everything works as expected.
knitr::opts_chunk$set(cache = TRUE) #, autodep=TRUE)  #$

## ---- cache = TRUE-------------------------------------------------------

# Data subset
library(PDS)
# download the addhealth_public4.RData data file
#   and load it as described on UNM Learn / Resources / PDS Data:
#     load("/PATH_TO_FILE/addhealth_public4.RData")
dim(AddHealth) # n=6504 vars = 2829
dim(addhealth_public4)
#
addhealth.sub <- as.data.frame(AddHealth)
#addPeers <- as.data.frame()
getwd()
#
dim(addhealth_public4)
var.list4 <- c("h4ed1" # what is hs graduaation status 
               , "h4ed2" #what highest ed 1<9,2hs,3hsgrad,45some,7BA
              )
var.list <- c("AID"
            , "H1GI1M"
            , "IMONTH"     
            , "H1GI1Y"    
            , "H1GI3"
            , "IYEAR"
            , "IDAY"
            , "age"
            , "BIO_SEX"
            , "H1EE2"
            , "H1EE3"
            , "H1EE4"
            , "H1WP11"
            , "H1WP16"
            , "H1GI8"    
            , "H1GI6A" 
            , "H1GI6B" 
            , "H1GI6C" 
            , "H1GI6D" 
            , "H1GI4" 
            , "S6A" 
            , "S6B" 
            , "S6C" 
            , "S6D"
            , "S4"
                     )
var.list
var.list4
str(var.list)
str(var.list4)
table(var.list4)
# subset of data
addhealth.sub <- subset(AddHealth, select = var.list)
addhealth.sub.full <- subset(AddHealth, select = var.list)
addhealth.sub4 <- subset(addhealth_public4, select = var.list4)
addhealth.sub.full$gradHS <- addhealth_public4$h4ed1 
addhealth.sub.full$gradBA <- addhealth_public4$h4ed2 
addhealth.sub.full$education <- addhealth_public4$h4ed2
dim(addhealth.sub)
dim(addhealth.sub4)
dim(addhealth.sub.full)

#matrix(addhealth.sub)
#str(addhealth.sub)
sort(colnames(addhealth.sub))
addhealth.sub <- addhealth.sub[order(addhealth.sub$AID, decreasing=FALSE),]
#summary(addhealth.sub)                                                    
#dim(addhealth.sub)
sort(colnames(addhealth.sub.full))
addhealth.sub <- addhealth.sub.full[order(addhealth.sub$AID, decreasing=FALSE),]

## ---- cache=TRUE---------------------------------------------------------
#head(AddHealth)
# Rename
# note, if the new "dplyr" package is installed, this may not work correctly
library(plyr) # for rename(dat, c("from" = "to"))
addhealth.sub <- rename(addhealth.sub, c(
                        "AID"        =  "AID"
                      , "BIO_SEX"        = "Sex"
                      , "H1GI1M"       = "BirthMonth"
                      , "IMONTH"     = "SurveyMonth"
                      , "H1GI1Y"      = "BirthYear"
                      , "IYEAR"      = "SurveyYear"
                      , "IDAY"       = "SurveyDay"
                      , "H1GI3"        = "BirthDay"
                      , "age"          = "Age"
                      , "H1EE2"     = "ExpectCollege"
                      , "H1EE3"     = "Working"
                      , "H1EE4"     = "HoursWorked"
                      , "H1WP11"    = "ParentConcernM"
                      , "H1WP16"      = "ParentConcernF"
                      , "H1GI8"    = "Race"
                      , "H1GI6A" = "White1"
                      , "H1GI6B" = "Black2"
                      , "H1GI6C" = "Native3"
                      , "H1GI6D" = "AsianOth4"
                      , "H1GI4" = "Latino5"
                      , "S6A" = "White"
                      , "S6B" = "Black"
                      , "S6C" = "Asian"
                      , "S6D" = "Native"
                      , "S4" = "Latino"
                                          ))
str(addhealth.sub)

addhealth.sub.full <- rename(addhealth.sub.full, c(
                        "AID"        =  "AID"
                      , "BIO_SEX"        = "Sex"
                      , "H1GI1M"       = "BirthMonth"
                      , "IMONTH"     = "SurveyMonth"
                      , "H1GI1Y"      = "BirthYear"
                      , "IYEAR"      = "SurveyYear"
                      , "IDAY"       = "SurveyDay"
                      , "H1GI3"        = "BirthDay"
                      , "age"          = "Age"
                      , "H1EE2"     = "ExpectCollege"
                      , "H1EE3"     = "Working"
                      , "H1EE4"     = "HoursWorked"
                      , "H1WP11"    = "ParentConcernM"
                      , "H1WP16"      = "ParentConcernF"
                      , "H1GI8"    = "Race"
                      , "H1GI6A" = "White1"
                      , "H1GI6B" = "Black2"
                      , "H1GI6C" = "Native3"
                      , "H1GI6D" = "AsianOth4"
                      , "H1GI4" = "Latino5"
                      , "S6A" = "White"
                      , "S6B" = "Black"
                      , "S6C" = "Asian"
                      , "S6D" = "Native"
                      , "S4" = "Latino"
                      , "gradHS" = "gradHS"
                      , "gradBA" = "gradBA"
                      , "education" ="education"
                                          ))
str(addhealth.sub)
str(addhealth.sub.full)

## ---- cache = TRUE-------------------------------------------------------
# Variable Creation: RaceEth, Age, [AllParenConcern]
#install.packages("lubridate")
#library(lubridate)

#Age  Method #0
DOBYear <- (addhealth.sub$BirthYear  + 1900)
SurvYear <- (addhealth.sub$SurveyYear + 1900)
AgeYear <- (SurvYear - DOBYear)
head(AgeYear)
AgeYearMos <- AgeYear*12
head(AgeYearMos)
AgeMonth <- (addhealth.sub$SurveyMonth - addhealth.sub$BirthMonth)
head(AgeMonth)
head(addhealth.sub$BirthMonth)
AgeYearsMonths <- AgeYearMos + AgeMonth
head(AgeYearsMonths)
Age <- AgeYearsMonths/12
addhealth.sub$Age <- Age
is.numeric(Age)
#summary(Age)

# AgeCat 7 Levels 14 - 20
AgeCat <- as.factor(addhealth.sub$Age)
AgeCat <- c(NA, 6504)
AgeCat[addhealth.sub$Age >= 12 & addhealth.sub$Age <= 13] <- 13
AgeCat[addhealth.sub$Age >= 13 & addhealth.sub$Age <= 14] <- 14
AgeCat[addhealth.sub$Age >= 14 & addhealth.sub$Age <= 15] <- 15
AgeCat[addhealth.sub$Age >= 15 & addhealth.sub$Age <= 16] <- 16
AgeCat[addhealth.sub$Age >= 16 & addhealth.sub$Age <= 17] <- 17
AgeCat[addhealth.sub$Age >= 17 & addhealth.sub$Age <= 18] <- 18
AgeCat[addhealth.sub$Age >= 18 & addhealth.sub$Age <= 19] <- 19
AgeCat[addhealth.sub$Age >= 19 & addhealth.sub$Age <= 21] <- 21
AgeCat[addhealth.sub$Age >= 22 & addhealth.sub$Age <= 22] <- 22
AgeCat <- as.factor(AgeCat)
class(AgeCat)
class(Age)
levels(AgeCat)
summary(AgeCat)
addhealth.sub$AgeCat <- AgeCat

## ---- cache = TRUE-------------------------------------------------------
#RacEth
#summary(addhealth.sub$White1)
#summary(addhealth.sub$Black2)
summary(addhealth.sub$Native3)
#summary(addhealth.sub$AsianOth4)
#summary(addhealth.sub$Latino5)
RaceEth <-rep(NA, 6504)
RaceEth[addhealth.sub$White1==1 | addhealth.sub$White==1] <- 1
RaceEth[addhealth.sub$Black2==1 | addhealth.sub$Black==1] <- 2
RaceEth[addhealth.sub$Native3==1 | addhealth.sub$Native==1] <- 3
RaceEth[addhealth.sub$AsianOth4==1 | addhealth.sub$Asian==1] <- 4
RaceEth[addhealth.sub$Latino5==1 | addhealth.sub$Latino==1] <- 5
summary(RaceEth)
addhealth.sub$RaceEth <- as.factor(RaceEth)
levels(addhealth.sub$RaceEth)

#MeanParenConcern OLD METHOD
ParenConcernM <-rep(0, 6504)
ParenConcernM <- as.numeric(ParenConcernM)
ParenConcernM[addhealth.sub$ParentConcernM==1]<-1
ParenConcernM[addhealth.sub$ParentConcernM==2]<-2
ParenConcernM[addhealth.sub$ParentConcernM==3]<-3
ParenConcernM[addhealth.sub$ParentConcernM==4]<-4
ParenConcernM[addhealth.sub$ParentConcernM==5]<-5
#summary(ParenConcernM)
ParenConcernF <-rep(0, 6504)
ParenConcernF <- as.numeric(ParenConcernF)
ParenConcernF[addhealth.sub$ParentConcernF==1]<-1
ParenConcernF[addhealth.sub$ParentConcernF==2]<-2
ParenConcernF[addhealth.sub$ParentConcernF==3]<-3
ParenConcernF[addhealth.sub$ParentConcernF==4]<-4
ParenConcernF[addhealth.sub$ParentConcernF==5]<-5
#summary(ParenConcernF)
ParenConcernMeanOld <- ((ParenConcernF + ParenConcernM)/2)
table(ParenConcernMeanOld)
#

#MeanParenConcern 
ParenConcernM <-rep(NA, 6504)
ParenConcernM <- as.numeric(ParenConcernM)
ParenConcernM[addhealth.sub$ParentConcernM==1]<-1
ParenConcernM[addhealth.sub$ParentConcernM==2]<-2
ParenConcernM[addhealth.sub$ParentConcernM==3]<-3
ParenConcernM[addhealth.sub$ParentConcernM==4]<-4
ParenConcernM[addhealth.sub$ParentConcernM==5]<-5
#summary(ParenConcernM)
ParenConcernF <-rep(NA, 6504)
ParenConcernF <- as.numeric(ParenConcernF)
ParenConcernF[addhealth.sub$ParentConcernF==1]<-1
ParenConcernF[addhealth.sub$ParentConcernF==2]<-2
ParenConcernF[addhealth.sub$ParentConcernF==3]<-3
ParenConcernF[addhealth.sub$ParentConcernF==4]<-4
ParenConcernF[addhealth.sub$ParentConcernF==5]<-5
#summary(ParenConcernF)
ParenConcernMax <- pmax(ParenConcernF, ParenConcernM, na.rm = TRUE)
ParenConcernMin <- pmin(ParenConcernF, ParenConcernM, na.rm = TRUE)
ParenConcernMean <- as.integer((ParenConcernMax + ParenConcernMin)/2)
table(ParenConcernMax)
table(ParenConcernMin)
table(ParenConcernMean)
table(ParenConcernMeanOld)
#
ParenConcernMax.freq <- table(ParenConcernMax) 
ParenConcernMin.freq <- table(ParenConcernMin) 
ParenConcernMean.freq <- table(ParenConcernMean)  
ParenConcernMeanOld.freq <- table(ParenConcernMeanOld) 
# help.search("max",package="base")
# fbba = "Facebook blue/ascending" for horizontal bars
# And now breaking code across lines for clarity
facebookBlue <- c(rep("beige", 1),
                  rgb(59, 89, 152, maxColorValue = 255))
barplot(ParenConcernMax.freq,
        horiz = FALSE,         # Horizontal
        col = "orange",        # Use colors "fbba"
        main = "ParenConcernMax.freq",
        ylab = "Student Count", 
        xlab = "ParenConcernMax.freq")
barplot(ParenConcernMin.freq,
        horiz = FALSE,         # Horizontal
        col = "orange",        # Use colors "fbba"
        main = "ParenConcernMin.freq",
        ylab = "Student Count", 
        xlab = "ParenConcernMin.freq")
barplot(ParenConcernMean.freq,
        horiz = FALSE,         # Horizontal
        col = "orange",        # Use colors "fbba"
        main = "ParenConcernMean.freq",
        ylab = "Student Count", 
        xlab = "ParenConcernMean.freq")
barplot(ParenConcernMeanOld.freq,
        horiz = FALSE,         # Horizontal
        col = "orange",        # Use colors "fbba"
        main = "ParenConcernMeanOld",
        ylab = "Student Count", 
        xlab = "ParenConcernMeanOld")
str(ParenConcernMean)
head(ParenConcernMean)
summary(ParenConcernMean)   
table(ParenConcernMean)
ParenConcernMean <- as.factor(ParenConcernMean)
addhealth.sub$ParenConcernMean <- as.factor(ParenConcernMean)
dim(addhealth.sub)
class(addhealth.sub$ParenConcernMean)
addhealth.sub$ParenConcernNum <- as.numeric(addhealth.sub$ParenConcernMean)
class(addhealth.sub$ParenConcernNum)
dim(addhealth.sub)
#
#Binary Parental College Concern  High Parental Concern
length(addhealth.sub$ParenConcernMean)
levels(addhealth.sub$ParenConcernMean)
summary(addhealth.sub$ParenConcernMean)
head(addhealth.sub$ParenConcernMean)
dim(addhealth.sub)
table(addhealth.sub$ParenConcernNum)
HighParenCollConcern <- rep(NA, 6504)

HighParenCollConcern[addhealth.sub$ParenConcernNum <= 4.5] <- 0
HighParenCollConcern[addhealth.sub$ParenConcernNum == 5] <- 1
addhealth.sub$HighParenCollConcern <- HighParenCollConcern
addhealth.sub$HighParenCollConcern <- as.factor(addhealth.sub$HighParenCollConcern)
str(addhealth.sub$HighParenCollConcern)
summary(addhealth.sub$HighParenCollConcern)
class(addhealth.sub$HighParenCollConcern)
head(addhealth.sub$HighParenCollConcern)

# 
LatinaFemale  <- rep(0, 6504)
LatinaFemale[(addhealth.sub$Sex == 2) & (addhealth.sub$RaceEth == 5)] <- 1
str(LatinaFemale)
summary(LatinaFemale)
addhealth.sub$LatinaFemale <- LatinaFemale

LatinoMale <- rep(0, 6504)
LatinoMale[(addhealth.sub$Sex == 1) & (addhealth.sub$RaceEth == 5)] <- 1
str(LatinoMale)
summary(LatinoMale)
addhealth.sub$LatinoMale <- LatinoMale

Latino <- rep(0, 6504)
Latino[(addhealth.sub$RaceEth == 5)] <- 1
str(Latino)
summary(Latino)
addhealth.sub$Latino <- Latino

## ---- cache = TRUE-------------------------------------------------------
#### addhealth.sub$Studen_
 
# create a factor variable based on number of cigarettes smoked
#workHighparen
table(addhealth.sub$Working)
str(addhealth.sub$Working)
Studen <- NULL
Studen <- rep(0, 6504)
head(addhealth.sub$Working)
levels(addhealth.sub$Working)
levels(addhealth.sub$HighParenCollConcern)
head(addhealth.sub$HighParenCollConcern)
Studen[(addhealth.sub$Working == 0) & (addhealth.sub$HighParenCollConcern == 1)] <- 1 # "Non-working, high parent"
Studen[(addhealth.sub$Working == 0) & (addhealth.sub$HighParenCollConcern == 0)] <- 2 # "Non-working, low parent"
Studen[(addhealth.sub$Working == 1) & (addhealth.sub$HighParenCollConcern == 1)] <- 3 # "working, high parent"
Studen[(addhealth.sub$Working == 1) & (addhealth.sub$HighParenCollConcern == 0)] <- 4 # "working, low parent"
addhealth.sub$Studen <- Studen
addhealth.sub$Studen <- factor(addhealth.sub$Studen)
str(addhealth.sub$Studen)
#
Studen8 <- NULL
head(addhealth.sub$LatinoMale)
levels(addhealth.sub$LatinoMale)
str(addhealth.sub$LatinoMale)
head(addhealth.sub$LatinoMale)
Studen8 <- rep(0, 6504)
Studen8[(addhealth.sub$Working == 0) & (addhealth.sub$HighParenCollConcern == 1)] <- 1 # "Non-working, high parent"
Studen8[(addhealth.sub$Working == 0) & (addhealth.sub$HighParenCollConcern == 1) & (addhealth.sub$LatinoMale == 1)] <- 2 # "Non-working, high parent, Latino-male"
Studen8[(addhealth.sub$Working == 0) & (addhealth.sub$HighParenCollConcern == 0)] <- 3# "Non-working, low parent"
Studen8[(addhealth.sub$Working == 0) & (addhealth.sub$HighParenCollConcern == 0) & (addhealth.sub$LatinoMale == 1)] <- 4 # "Non-working, high parent, Latino-male"
Studen8[(addhealth.sub$Working == 1) & (addhealth.sub$HighParenCollConcern == 1)] <- 5# "working, high parent"
Studen8[(addhealth.sub$Working == 1) & (addhealth.sub$HighParenCollConcern == 1) & (addhealth.sub$LatinoMale == 1)] <- 6 # "Non-working, high parent, Latino-male
Studen8[(addhealth.sub$Working == 1) & (addhealth.sub$HighParenCollConcern == 0)] <- 7 # "working, low parent"
Studen8[(addhealth.sub$Working == 1) & (addhealth.sub$HighParenCollConcern == 0) & (addhealth.sub$LatinoMale == 1)] <- 8 # "Non-working, high parent, Latino-male
addhealth.sub$Studen8 <- Studen8
addhealth.sub$Studen8 <- factor(addhealth.sub$Studen8)
str(addhealth.sub$Studen8)
summary(addhealth.sub$Studen8)
levels(addhealth.sub$Studen8)
# only keep the variables we'll analyze
StudenLat <- NULL
head(addhealth.sub$StudenLat)
levels(addhealth.sub$StudenLat)
str(addhealth.sub$StudenLat)
head(addhealth.sub$StudenLat)
StudenLat <- rep(0, 6504)
StudenLat[(addhealth.sub$Working == 0) & (addhealth.sub$HighParenCollConcern == 1)] <- 1 # "Non-working, high parent"
StudenLat[(addhealth.sub$Working == 0) & (addhealth.sub$HighParenCollConcern == 1) & (addhealth.sub$Latino == 1)] <- 2 # "Non-working, high parent, Latino-male"
StudenLat[(addhealth.sub$Working == 0) & (addhealth.sub$HighParenCollConcern == 0)] <- 3# "Non-working, low parent"
StudenLat[(addhealth.sub$Working == 0) & (addhealth.sub$HighParenCollConcern == 0) & (addhealth.sub$Latino == 1)] <- 4 # "Non-working, high parent, Latino-male"
StudenLat[(addhealth.sub$Working == 1) & (addhealth.sub$HighParenCollConcern == 1)] <- 5# "working, high parent"
StudenLat[(addhealth.sub$Working == 1) & (addhealth.sub$HighParenCollConcern == 1) & (addhealth.sub$Latino == 1)] <- 6 # "Non-working, high parent, Latino-male
StudenLat[(addhealth.sub$Working == 1) & (addhealth.sub$HighParenCollConcern == 0)] <- 7 # "working, low parent"
StudenLat[(addhealth.sub$Working == 1) & (addhealth.sub$HighParenCollConcern == 0) & (addhealth.sub$Latino == 1)] <- 8 # "Non-working, high parent, Latino-male
addhealth.sub$StudenLat <- StudenLat
addhealth.sub$StudenLat <- factor(addhealth.sub$StudenLat)
str(addhealth.sub$StudenLat)
summary(addhealth.sub$StudenLat)
levels(addhealth.sub$StudenLat)
#
# HoursWorkedCat
str(addhealth.sub$HoursWorked)
addhealth.sub$HoursWorkedCat[addhealth.sub$HoursWorked >= 0 & addhealth.sub$HoursWorked <= 0] <- 0
addhealth.sub$HoursWorkedCat[addhealth.sub$HoursWorked >= 1 & addhealth.sub$HoursWorked <= 5] <- 5
addhealth.sub$HoursWorkedCat[addhealth.sub$HoursWorked >= 6 & addhealth.sub$HoursWorked <= 10] <- 10
addhealth.sub$HoursWorkedCat[addhealth.sub$HoursWorked >= 11 & addhealth.sub$HoursWorked <= 15] <- 15
addhealth.sub$HoursWorkedCat[addhealth.sub$HoursWorked >= 16 & addhealth.sub$HoursWorked <= 20] <- 20
addhealth.sub$HoursWorkedCat[addhealth.sub$HoursWorked >= 21 & addhealth.sub$HoursWorked <= 25] <- 25
addhealth.sub$HoursWorkedCat[addhealth.sub$HoursWorked >= 26 & addhealth.sub$HoursWorked <= 30] <- 30
addhealth.sub$HoursWorkedCat[addhealth.sub$HoursWorked >= 31 & addhealth.sub$HoursWorked <= 35] <- 35
addhealth.sub$HoursWorkedCat[addhealth.sub$HoursWorked >= 36 & addhealth.sub$HoursWorked <= 40] <- 40
addhealth.sub$HoursWorkedCat[addhealth.sub$HoursWorked >= 41 & addhealth.sub$HoursWorked <= 45] <- 45
summary(addhealth.sub$HoursWorkedCat)
summary(addhealth.sub$HoursWorked)

# HoursWorkedLog   
is.numeric(addhealth.sub$HoursWorked)
addhealth.sub$HoursWorkedLog <- (addhealth.sub$HoursWorked + 1)
addhealth.sub$HoursWorkedLog <- log(addhealth.sub$HoursWorkedLog)
summary(addhealth.sub$HoursWorkedLog)

## ---- cache = TRUE-------------------------------------------------------
# addhealth.sub$Sex[addhealth.sub$Sex == NA] <- 0
# Next, replace any values that are "6" with NA
addhealth.sub$Sex[addhealth.sub$Sex == 6] <- NA
summary(addhealth.sub$Sex)
# Then drop unused factor categories.
addhealth.sub$Sex <- factor(addhealth.sub$Sex)[, drop = TRUE]
summary(addhealth.sub$Sex)

#ExpectCollege
str(addhealth.sub$ExpectCollege)
summary(addhealth.sub$ExpectCollege)
#addhealth.sub$ExpectCollege[addhealth.sub$ExpectCollege == NA] <- 0
addhealth.sub$ExpectCollege[addhealth.sub$ExpectCollege == 6] <- NA
addhealth.sub$ExpectCollege[addhealth.sub$ExpectCollege == 8] <- NA
#summary(addhealth.sub$ExpectCollege)
addhealth.sub$ExpectCollege <- factor(addhealth.sub$ExpectCollege)[, drop = TRUE]
#ExpectCollege Made numeric
addhealth.sub$ExpectCollegeNum <- as.numeric(addhealth.sub$ExpectCollege)
str(addhealth.sub$ExpectCollegeNum)
is.numeric(addhealth.sub$ExpectCollegeNum)
#High versus Low Expecation: <=4 versus ==5
str(addhealth.sub$ExpectCollegeNum)
addhealth.sub$ExpectCollegeHigh <- as.numeric(addhealth.sub$ExpectCollegeNum)
addhealth.sub$ExpectCollegeHigh[addhealth.sub$ExpectCollegeNum == 5] <- 1
addhealth.sub$ExpectCollegeHigh[addhealth.sub$ExpectCollegeNum <= 4] <- 0
addhealth.sub$ExpectCollegeHigh <- as.factor(addhealth.sub$ExpectCollegeHigh)
#stats
summary(addhealth.sub$ExpectCollege)
summary(addhealth.sub$ExpectCollegeNum)
summary(addhealth.sub$ExpectCollegeHigh)
 
#addhealth.sub$ParentConcernM[addhealth.sub$ParentConcernM == NA] <- 0
addhealth.sub$ParentConcernM[addhealth.sub$ParentConcernM == 6] <- NA
addhealth.sub$ParentConcernM[addhealth.sub$ParentConcernM == 7] <- NA
addhealth.sub$ParentConcernM[addhealth.sub$ParentConcernM == 8] <- NA
addhealth.sub$ParentConcernM[addhealth.sub$ParentConcernM == 9] <- NA
#summary(addhealth.sub$ParentConcernM)
addhealth.sub$ParentConcernM <- NULL  ##  !!Disclude Unused Vars to decrease NA drops
addhealth.sub$ParentConcernF <- NULL  ##  !!Disclude Unused Vars to decrease NA drops
#addhealth.sub$ParentConcernM <- factor(addhealth.sub$ParentConcernM)[, drop = TRUE]

#Working
#str(addhealth.sub$Working)
#summary(addhealth.sub$Working)
table(addhealth.sub$Working)
addhealth.sub$Working[addhealth.sub$Working == 6] <- NA
addhealth.sub$Working[addhealth.sub$Working == 8] <- NA
addhealth.sub$Working <- factor(addhealth.sub$Working)[, drop = TRUE]
#summary(addhealth.sub$Working)

#HoursWorked
#str(addhealth.sub$HoursWorked)
#summary(addhealth.sub$HoursWorked)
#addhealth.sub$HoursWorked[addhealth.sub$HoursWorked == NA] <- 0
addhealth.sub$HoursWorked[addhealth.sub$HoursWorked >= 50] <- NA
addhealth.sub$HoursWorked[addhealth.sub$HoursWorked == 996] <- NA
addhealth.sub$HoursWorked[addhealth.sub$HoursWorked == 998] <- NA
addhealth.sub$HoursWorked[addhealth.sub$HoursWorked == 999] <- NA
#summary(addhealth.sub$HoursWorked)

#RaceEth
addhealth.sub$RaceEth[addhealth.sub$RaceEth == 0] <- NA
addhealth.sub$RaceEth <- factor(addhealth.sub$RaceEth)[, drop = TRUE]
#summary(addhealth.sub$RaceEth)

#Age
str(addhealth.sub$Age)
summary(addhealth.sub$Age)
addhealth.sub$Age[addhealth.sub$Age >= 22] <- NA
addhealth.sub$Age[addhealth.sub$Age <= 12] <- NA
addhealth.sub$Age <- (addhealth.sub$Age)[, drop = TRUE]
str(addhealth.sub$Age)
summary(addhealth.sub$Age)


## ---- cache = TRUE-------------------------------------------------------
addhealth.sub.f <- addhealth.sub
# Drop NA's
is.factor(addhealth.sub.full$gradHS)
summary(addhealth.sub.full$gradHS)
gradHS <- addhealth.sub.full$gradHS
gradHS[addhealth.sub.full$gradHS == 6  | addhealth.sub.full$gradHS == 8] <- NA
gradHS[addhealth.sub.full$gradHS == 1  | addhealth.sub.full$gradBA >= 3] <- 1
gradHS[addhealth.sub.full$gradHS >= 2  | addhealth.sub.full$gradBA <= 2] <- 0
gradHS <- as.factor(gradHS)
class(gradHS)
levels(gradHS)
summary(gradHS)
addhealth.sub.f$gradHS <- gradHS

is.factor(addhealth.sub.full$gradBA)
summary(addhealth.sub.full$gradBA)
fivenum(addhealth.sub.full$gradBA)
gradBA <- addhealth.sub.full$gradBA
gradBA[addhealth.sub.full$gradBA == 98] <- NA
gradBA[addhealth.sub.full$gradBA >= 7] <- 1
gradBA[addhealth.sub.full$gradBA <= 6] <- 0

gradBA <- as.factor(gradBA)
class(gradBA)
levels(gradBA)
summary(gradBA)
addhealth.sub.f$gradBA <- gradBA

is.numeric(addhealth.sub.full$education)
summary(addhealth.sub.full$education)
education <- addhealth.sub.full$education
education[addhealth.sub.full$education == 98] <- NA
education <- as.factor(education)
class(education)
levels(education)
summary(education)
addhealth.sub.f$education <- education
####################
addhealth.sub.f <- na.omit(addhealth.sub.f)
addhealth.sub <- na.omit(addhealth.sub)
dim(addhealth.sub)
dim(addhealth.sub.f)
str(addhealth.sub)
str(addhealth.sub.f)
summary(addhealth.sub.f$gradBA)

## ---- cache = TRUE-------------------------------------------------------
# Labeling Variables
#install.packages("Hmisc")
library(Hmisc) # for label()
label(addhealth.sub$AID) <- "Unique ID no alphabetics"
#label(addhealth.sub$Sex) <- "Gender"
label(addhealth.sub$BirthMonth)     <- "Birth month, two digits"
label(addhealth.sub$BirthYear)       <- "Birth year, two digits"
label(addhealth.sub$ExpectCollege)     <- "Expectation to go to college"
label(addhealth.sub$ExpectCollegeNum)     <- "Expectation to go to college-Numeral"
label(addhealth.sub$Working)       <- "Whether worked in past \nfour weeks (conservative)"
label(addhealth.sub$HoursWorked)   <- "Non-summer hours worked per week"
#label(addhealth.sub$ParentConcernM)       <- "Mother's Concern about College Attend."
#label(addhealth.sub$ParentConcernF)   <- "Father's Concern about College Attend."
label(addhealth.sub$RaceEth)   <- "Race-Ethnicity"
label(addhealth.sub$HoursWorkedCat)   <- "Hours Worked Category"
label(addhealth.sub$AgeCat)        <- "Age Category"
label(addhealth.sub$HoursWorkedLog)   <- "Hours Worked Log"
label(addhealth.sub$ParenConcernMean)   <- "Mean Parental Concern"
label(addhealth.sub$ParenConcernNum)   <- "Mean Parental Concern, Numeric"
label(addhealth.sub$HighParenCollConcern)   <- "High Parental College Concern"
label(addhealth.sub$Studen)   <- "Student quad, High-Low Parental Concern \n Work-Not Workl"
label(addhealth.sub$Studen8)   <- "Student quad x LatinoMale, High-Low Parental Concern \n Work-Not Workl"
label(addhealth.sub.f$gradBA)   <- "Graduated BA"
#label(addhealth.sub.f$gradHS)   <- "Graduated HS Diploma"
label(addhealth.sub.f$education)   <- ""
summary(addhealth.sub$ExpectCollegeNum)
levels(addhealth.sub$Studen)
str(addhealth.sub$Studen)
levels(addhealth.sub$Studen8)
str(addhealth.sub$Studen8)

## ---- cache = TRUE-------------------------------------------------------
# Informative Labels
str(addhealth.sub$Sex)
addhealth.sub$Sex <- factor(addhealth.sub$Sex
                       , labels = c("M"
                                  , "F"
                                   )
                        )

# Outcome [addhealth.sub.f]
addhealth.sub.f$gradBA <- factor(addhealth.sub.f$gradBA
                       , labels = c("No BA"
                                  , "BA Grad"
                                   )
                        )
is.factor(addhealth.sub.f$gradHS)
str(addhealth.sub.f$gradHS)
addhealth.sub.f$gradHS <- factor(addhealth.sub.f$gradHS
                       , labels = c("Less than HS"
                                  , "HS graduate"
                                   )
                        )
str(addhealth.sub.f$education)
#addhealth.sub.f$education <- factor(addhealth.sub.f$education
#                       , labels = c("Attended College"
#                                  , "Did not Atttend Coll"
#                                   )
#                        )
str(addhealth.sub.f$gradHS)
str(addhealth.sub.f$gradBA)
summary(addhealth.sub.f$gradBA)
table(addhealth.sub.f$gradBA)
str(addhealth.sub.f$education)
summary(addhealth.sub.f$gradHS)

# High Parental College Conern
str(addhealth.sub$HighParenCollConcern)
addhealth.sub$HighParenCollConcern <- factor(addhealth.sub$HighParenCollConcern
                       , labels = c("Low Concern"
                                  , "High Concern"
                                   )
                        ) 
str(addhealth.sub$HighParenCollConcern)

## Student Quadrants
str(addhealth.sub$Studen)
addhealth.sub$Studen <- factor(addhealth.sub$Studen
                       , labels = c("HC,NW"
                                  , "LC,NW" 
                                  , "HC,W"
                                  , "LC,W"
                                   )
                        )
str(addhealth.sub$Studen)
#

addhealth.sub$Studen8 <- factor(addhealth.sub$Studen8
                       , labels = c("HC,NW"
                                  , "HC,NW\nMal-Lat"
                                  , "LC,NW" 
                                  , "LC,NW\nMal-Lat"
                                  , "HC,W"
                                  , "HC,W\nMal-Lat"
                                  , "LC,W"
                                  , "LC,W\nMal-Lat" 
                                   )
                        )
#
addhealth.sub$StudenLat <- factor(addhealth.sub$Studen8
                       , labels = c("HC\nNW\nnon-Lat"
                                  , "HC\nNW\nLat"
                                  , "LC\nNW\nnon-Lat" 
                                  , "LC\nNW\nLat"
                                  , "HC\nW\nnon-Lat"
                                  , "HC\nW\nLat"
                                  , "LC\nW\nnon-Lat"
                                  , "LC\nW\nLat" 
                                   )
                        )
#
#addhealth.sub$RaceEth <- is.character(addhealth.sub$RaceEth)
addhealth.sub$RaceEth <- factor(addhealth.sub$RaceEth, labels = c("White", "Black", "Native", "Asian", "Latino" ))
str(addhealth.sub$RaceEth)
table(addhealth.sub$RaceEth)
#Working
table(addhealth.sub$Working)
addhealth.sub$Working <- factor(addhealth.sub$Working, labels = c("Not Working", "Working") )
table(addhealth.sub$Working)

## ---- cache = TRUE-------------------------------------------------------
# Mixed Rules
#install.packages("editrules")

fn.edit.rules <- "C:/Users/thoma/Dropbox/__CCCreative__/__ADA1/ADA1_Content/NouvelleAllHW14/ADA1_AddhealthTM_EditRules.txt"
readLines(fn.edit.rules)
# Encode these rules using the editrules package
library(editrules)
EditRules.AH.sub <- editfile(fn.edit.rules)
ve.AH.sub <- violatedEdits(EditRules.AH.sub, addhealth.sub)
summary(ve.AH.sub)

## ---- cache = TRUE-------------------------------------------------------
op <- par(no.readonly = TRUE)         # save plot settings
par(mfrow=c(1,1), mar = c(0,0,0,0))
plot(EditRules.AH.sub)
par(op)                               # restore plot settings
dim(addhealth.sub)
#summary(addhealth.sub)

## ------------------------------------------------------------------------
#855
library(ggplot2)
p5 <- ggplot(addhealth.sub, aes(x = HoursWorked, y = ExpectCollegeNum))
p5 <- p5 + geom_point(position = position_jitter(width=0.3), colour = "pink")
p5 <- p5 + stat_smooth(method = lm, se = FALSE) +  theme_bw()
p5 <- p5 + facet_wrap(Sex ~ RaceEth)
p5 <- p5 + labs(x = "Hours Worked", y = "Expectation to Attend College", title = "Hours Worked and Expectation to attend College,\n by Genders and Race")
print(p5)

## ---- cache = TRUE, fig.width = 8, fig.height = 8------------------------
library(ggplot2)
a <- ggplot(data = addhealth.sub, aes(x = Sex))
a <- a + geom_bar(binwidth = 1, alpha = .15, color = "purple")
a <- a + labs(title = "Gender", x = "Sex")

b <- ggplot(data = addhealth.sub, aes(x = RaceEth))
b <- b + geom_bar(binwidth = 1, alpha = .15, color = "purple")
b <- b + labs(title = "Race-Ethnicity Count", x = "")

c <- ggplot(data = addhealth.sub, aes(x = Working))
c <- c + geom_bar(binwidth = 1, alpha = .15, color = "purple")
c <- c + labs(title = "Working Status", x = "")

d <- ggplot(data = addhealth.sub, aes(x = Age))
d <- d + geom_bar(binwidth = .5, alpha = .15, color = "purple")
d <- d + labs(title = "Age", x = "")

e <- ggplot(data = addhealth.sub, aes(x = HoursWorkedCat))
e <- e + geom_bar(binwidth = 5, alpha = .15, color = "purple")
e <- e + labs(title = "Hours Worked", x = "", y = "purple")

f <- ggplot(data = addhealth.sub, aes(x = ParenConcernMean))
f <- f + geom_bar(binwidth = 1, alpha = .15, color = "purple")
f <- f + labs(title = "Parental Coll Concern", x= "", y = "count")

g <- ggplot(data = addhealth.sub.f, aes(x = HighParenCollConcern))
g <- g + geom_bar(binwidth = 1, alpha = .15, color = "purple")
g <- g + labs(title = "High Parental \n College Concern, mean >= 4.5/5", x = "", y = "count")

h <- ggplot(data = addhealth.sub, aes(x = ExpectCollegeNum))
h <- h + geom_bar(binwidth = 1, alpha = .15, color = "purple")
h <- h + labs(title = "Expectation \n to Attend College", x = "", y = "count")

hi <- ggplot(data = addhealth.sub, aes(x = ExpectCollegeHigh))
hi <- hi + geom_bar(binwidth = 1, alpha = .15, color = "purple")
hi <- hi + labs(title = "High College Expectations, == 5/5",
                 x = "", y = "count")

i <- ggplot(data = addhealth.sub, aes(x = Studen))
i <- i + geom_bar(binwidth = 1, alpha = .15, color = "purple")
i <- i + labs(title = "Student Type \n high/low concern /nWorking, not Working
              ", x = "", y = "count")

j <- ggplot(data = addhealth.sub.f, aes(x = education))
j <- j + geom_bar(binwidth = 1, alpha = .25, color = "brown")
j <- j + labs(title = "Education Level 1-13,\n 1=<HS,7=BA attain,13=PdD", x = "", y = "count")

k <- ggplot(data = addhealth.sub.f, aes(x = gradBA))
k <- k + geom_bar(binwidth = 1, alpha = .25, color = "brown")
k <- k + labs(title = "Graduated BA College", x = "", y = "count")

l <- ggplot(data = addhealth.sub.f, aes(x = gradHS))
l <- l + geom_bar(binwidth = 1, alpha = .25, color = "brown")
l <- l + labs(title = "Graduated high school", x = "Graduated high school", y = "count")
library(gridExtra)
grid.arrange(  b,   d, e, f,    h,  i, j, k, nrow=3)

## ---- fig.width = 8, fig.height = 5--------------------------------------
library(ggplot2)
p1 <- ggplot(addhealth.sub, aes(x = HoursWorked, y = ExpectCollegeNum))
p1 <- p1 + geom_point(position = position_jitter(width=0.3), colour = "orange")
p1 <- p1 + stat_smooth(method = lm, se = FALSE) +  theme_bw()
p1 <- p1 + facet_wrap(Sex ~ RaceEth)
p1 <- p1 + labs(title = "Working Hours and  College Expectation,\n by Gender and Race", x= "Working", y= "College Expectation")
print(p1)

library(ggplot2)
p2 <- ggplot(addhealth.sub, aes(x = Age, y = ExpectCollegeNum))
p2 <- p2 + geom_point(position = position_jitter(width=0.3), colour = "orange")
p2 <- p2 + stat_smooth(method = lm, se = FALSE) +  theme_bw()
p2 <- p2 + facet_wrap(Working ~ RaceEth)
p2 <- p2 + labs(title = "Age and College Expectation,\n by Working Status and Race", x= "Age", y = "College Expectation")
print(p2)

library(ggplot2)
p3 <- ggplot(addhealth.sub, aes(x = ParenConcernNum, y = ExpectCollegeNum))
p3 <- p3 + geom_point(position = position_jitter(width=0.3), colour = "grey")
p3 <- p3 + stat_smooth(method = lm, se = FALSE) +  theme_bw()
p3 <- p3 + facet_wrap(Working ~ RaceEth)
p3 <- p3 + labs(title = "Parental Concern and College Expectation,\n by Working Status and Race", x= "Parental Concern", y = "College Expectation")
print(p3)

library(ggplot2)
p <- ggplot(addhealth.sub, aes(x = ParenConcernNum, y = ExpectCollegeNum))
p <- p + geom_point(position = position_jitter(width=0.1), colour = "orange")
p <- p + stat_smooth(method = lm, se = FALSE) 
p <- p + facet_wrap(Sex ~ RaceEth)
p <- p + labs(title = "Parental Concern and Expectation to attend College,\n by Gender and Race", x= "Parental Concern", y = "College Expectation")
print(p)
#grid.arrange(p1, p2, p3, p4, p5, p, nrow=3)

## ---- cache = TRUE-------------------------------------------------------
g1 <- ggplot(data = addhealth.sub, aes(x = Sex, fill = ExpectCollege)) +
  geom_bar(position = "fill") +
  theme_bw()
g1 <- g1 + facet_wrap(~RaceEth)
g1 <- g1 + labs(x = "Gender", y = "Proportion", title = "College Expectation comparing Males and Females, by Race") +
  scale_fill_discrete(name="College \nExpectation") 
g1
g1 <- ggplot(data = addhealth.sub, aes(x = Sex, fill = ExpectCollege)) +
  geom_bar(position = "fill") +
  theme_bw()
g1 <- g1 + facet_wrap(~Studen)
g1 <- g1 + labs(x = "Gender", y = "Proportion", title = "College Expectation comparing Males and Females, by Race") +
  scale_fill_discrete(name="College \nExpectation") 
g1
g1 <- ggplot(data = addhealth.sub, aes(x = Sex, fill = ExpectCollege)) +
  geom_bar(position = "fill") +
  theme_bw()
g1 <- g1 + facet_wrap(~StudenLat)
g1 <- g1 + labs(x = "Gender", y = "Proportion", title = "College Expectation comparing Males and Females, by Race") +
  scale_fill_discrete(name="College \nExpectation") 
g1

## ---- cache = TRUE-------------------------------------------------------
##EBE
#T2 <- xtabs(~ExpectCollege + HoursWorkedCat, data = addhealth.sub)
#T2
#PT2 <- prop.table(T2, 2)
#PT2
#barplot(PT2)

g2 <- ggplot(data = na.omit(addhealth.sub), aes(x = HoursWorkedCat, fill = ExpectCollege)) +
  geom_bar(position = "fill", binwidth = 5) +
  theme_bw() +
  theme(axis.text.x  = element_text(angle = 45, vjust = 0.5)) +
  labs(x = "Hours Worked", y = "Expectation of College") +
  scale_fill_discrete(name="Expectation\n to go to \nCollege")
g2

#This is meaningful if working males are more coerced by money needs (thus expect college less) and females are less coerced (eg, work for social reasons and still expect college)
 #EBE (a version of the plot above)
#library(ggplot2)
#ggplot(data = na.omit(addhealth.sub), aes(x = HoursWorked, fill = ExpectCollege)) +
#  geom_bar(position = "fill") +
#  theme_bw() +
#  theme(axis.text.x  = element_text(angle = 45, vjust = 0.5)) +
#  labs(x = "Hours Worked", y = "Expectation of College") +
#  facet_grid(Sex ~ .)


## ---- cache = TRUE-------------------------------------------------------
#Scatterplot
library(ggplot2)
p1 <- ggplot(addhealth.sub, aes(x=HoursWorkedLog, y=ExpectCollegeNum))
p1 <- p1 + geom_point(position = position_jitter(width=0.3), color="orange")
p1 <- p1 + geom_smooth(method = lm, se = FALSE)
p1 <- p1 + labs(x = "Hours worked - logged", y = "Expectation to attend College", title="Hours Worked-Logged versus \n expectation to attend college")


#Just out of curiosity, work hours var is logged. 
library(ggplot2)
p1a <- ggplot(addhealth.sub, aes(x=HoursWorkedLog, y=ExpectCollegeNum))
p1a <- p1a + geom_point(position = position_jitter(width=0.3), color="orange")
p1a <- p1a + geom_smooth(method = lm, se = FALSE)
p1a <- p1a + labs(x = "Hours worked - logged", y = "Expectation to attend College", title="Hours Worked-Logged versus \n expectation to attend college")

# Both variables are transform-logged
ParenConcernNum <- as.numeric(addhealth.sub$ParenConcernMean)
ParenConcernMeanLog <- log10(addhealth.sub$ParenConcernNum)
ExpectCollegeNumLog <- log10(addhealth.sub$ExpectCollegeNum)
p2 <- ggplot(addhealth.sub, aes(x=ParenConcernMeanLog, y=ExpectCollegeNumLog))
p2 <- p2 + geom_point(position = position_jitter(width=.6), color="orange")
p2 <- p2 + geom_smooth(method = lm, se = FALSE, width = 1.5, color = "blue")
p2 <- p2 + labs(x = "Parental Concern - logged", y = "Expectation to attend College log", title="Parental Concern -Logged versus \n expectation to attend college")


# Y variables are transform-logged
p3 <- ggplot(addhealth.sub, aes(x=Age, y=ExpectCollegeNumLog))
p3 <- p3 + geom_point(position = position_jitter(width=0.1), color="orange")
p3 <- p3 + geom_smooth(method = lm, se = FALSE)
p3 <- p3 + labs(x = "Age", y = "Expectation to attend College log", title="Parental Concern versus \n expectation to attend college - log")


# Y variables are transform-logged
p4 <- ggplot(addhealth.sub, aes(x=ParenConcernNum, y=ExpectCollegeNum))
p4 <- p4 + geom_point(position = position_jitter(width=0.4), color="orange")
p4 <- p4 + geom_smooth(method = lm, se = FALSE)
p4 <- p4 + labs(x = "Parental College Concern", y = "Expectation to attend College ", title="Expectation to attend College  versus \n Parental College Concern")

p5 <- ggplot(addhealth.sub, aes(x = HoursWorkedCat, y = ExpectCollegeNum))
p5 <- p5 + geom_jitter(position = position_jitter(height = 0.1), alpha = 1/4, color = "brown")
p5 <- p5 + geom_smooth(method = lm, se = FALSE)
p5 <- p5 + labs(x = "Hours worked", y = "Expectation to attend College", title="Hours Worked \n expectation to attend college")
library(gridExtra)
grid.arrange(p1, p1a, p2, p3, p4, p5, nrow = 3)

## ---- cache = TRUE-------------------------------------------------------
# fit the simple linear regression model, Expectation regressed on hours worked
lm.ExpectCollegeNum.ParenConcernMean.HoursWorked <- lm(ExpectCollegeNum ~ ParenConcernNum, data = addhealth.sub)
# use summary() to parameters estimates (slope, intercept) and other summaries
summary(lm.ExpectCollegeNum.ParenConcernMean.HoursWorked)

# fit the simple linear regression model Expectation regressed on hours worked
lm.ExpectCollegeNum.HoursWorked <- lm(ExpectCollegeNum ~ HoursWorked, data = addhealth.sub)
# use summary() to parameters estimates (slope, intercept) and other summaries
summary(lm.ExpectCollegeNum.HoursWorked)

# fit the multiple linear regression model, Expectation regressed on interaction of hours worked and parental concern
lm.ExpectCollegeNum.ParenConcernMean.HoursWorked <- lm(ExpectCollegeNum ~  ParenConcernNum + HoursWorked, data = addhealth.sub)
# use summary() to parameters estimates (slope, intercept) and other summaries
summary(lm.ExpectCollegeNum.ParenConcernMean.HoursWorked)


## ---- cache = TRUE-------------------------------------------------------
#install.packages("gsheet")
library(gsheet)
library(ggplot2)
#install.package(GGally)
library(GGally)
#p11 <- ggpairs(addhealth.sub[,c("RaceEth", "ExpectCollege", "ParenConcernMean")]
#            , colour = "RaceEth"
#            , lower = list(continuous = "smooth")
#            , diag  = list(continuous = "density")
#            , upper = list(params = list(corSize = 6))
#            )
#print(p11)
#p12a <- ggpairs(addhealth.sub[,c("RaceEth", "HoursWorkedCat", "ExpectCollege")]
#            , colour = "RaceEth"
#            , binwidth = 4
#            , lower = list(continuous = "smooth")
#            , diag  = list(continuous = "density")
#            , upper = list(params = list(corSize = 6))
#            )
#print(p12a)
#
#p11 <- ggpairs(addhealth.sub[,c("Sex", "ExpectCollege", "ParentConcernM")]
#           , colour = "Sex"
#            , lower = list(continuous = "smooth")
#            , diag  = list(continuous = "density")
#            , upper = list(params = list(corSize = 6))
#            )
#print(p11)
#p11d <- ggpairs(addhealth.sub[,c("Working", #"ExpectCollege", "ParenConcernMean")]
#            , colour = "Working"
#            , lower = list(continuous = "smooth")
#            , diag  = list(continuous = "density")
#            , upper = list(params = list(corSize = 6))
#            )
#print(p11d)
#p12 <- ggpairs(addhealth.sub[,c("Sex", "Working", #"ExpectCollege")]
#            , colour = "Sex"
#            , lower = list(continuous = "smooth")
#            , diag  = list(continuous = "density")
#            , upper = list(params = list(corSize = 6))
#            )
#print(p12)
#p12a <- ggpairs(addhealth.sub[,c("Working", "ParentConcernM", "ExpectCollege")]
#            , colour = "Working"
#            , lower = list(continuous = "smooth")
#            , diag  = list(continuous = "density")
#            , upper = list(params = list(corSize = 6))
#            )
#print(p12a)

## ---- cache = TRUE-------------------------------------------------------
#  Strong, linear and positive correlation
# Parental Concern
library(ggplot2)
p <- ggplot(addhealth.sub, aes(x = ParenConcernNum, y = ExpectCollegeNum))
p <- p + geom_jitter(position = position_jitter(width = 0.3), alpha = 1/4, color = "red")
p <- p + stat_smooth(method = lm)
p <- p + labs(x = "Parental College Concern", y = "Expectation to Attend College", title = "Confidence Interval of Parental College Concern\n and Expectation to Attend College")
print(p)
# Hours Worked versus College Expectation
library(ggplot2)
p <- ggplot(addhealth.sub, aes(x = HoursWorked, y = ExpectCollegeNum))
p <- p + geom_jitter(position = position_jitter(width = 0.3), alpha = 1/4, color = "red")
p <- p + stat_smooth(method = lm)
p <- p + labs(x = "Hours Worked", y = "Expectation to Attend College", title = "Confidence Interval of Hours Worked\n and Expectation to Attend College")
print(p)

## ------------------------------------------------------------------------
t.result <- t.test(addhealth.sub$ExpectCollegeNum, conf.level = 0.95)  #$
t.result

## ---- cache = TRUE-------------------------------------------------------

library(ggplot2)
p <- ggplot(addhealth.sub, aes(x = ExpectCollegeNum))
p <- p + geom_histogram(binwidth = .5, alpha = .25)
p <- p + geom_rug(alpha = 1/5)
# est
p <- p + geom_vline(aes(xintercept = as.numeric(t.result$estimate)), colour = "red", alpha = .75, size = 2)
p <- p + geom_rect(aes(xmin = t.result$conf.int[1], xmax = t.result$conf.int[2], ymin = 0, ymax = 0)
                  , fill = "red", alpha = .5)
p <- p + labs(x = "Expectation to Attend College", title = "College Expectation \n red = est +- 95% CI")
print(p)

## ------------------------------------------------------------------------
## If we create a summary data.frame with a similar structure as our data, then we
##   can annotate our plot with those summaries.
library(plyr)
est.mean.Ex <- ddply(addhealth.sub
                      , "HighParenCollConcern"
                      , summarise
                      , ExpectCollegeNum = mean(ExpectCollegeNum, na.rm = TRUE)
                      )
est.mean.Ex

## ------------------------------------------------------------------------
#factor(addhealth.sub$ExpectCollegeNum)
library(ggplot2)
p <- ggplot(addhealth.sub, aes(x = HighParenCollConcern, y = ExpectCollegeNum))
p <- p + geom_boxplot(width = 0.5, alpha = 0.5)
p <- p + geom_jitter(position = position_jitter(width = 0.1), alpha = 1/2, colour = "orange")
# diamond at mean for each group
p <- p + stat_summary(fun.y = mean, geom = "point", shape = 18, size = 6, colour = "purple", alpha = 0.8)
p <- p + labs(x = "Parental College Concern", y = "Expectation to attend College", title = "College Expectation \n by Parental College Concern")
print(p)

## ------------------------------------------------------------------------
# histogram using ggplot
addhealth.sub$HighParenCollConcern <- factor(addhealth.sub$HighParenCollConcern)
p <- ggplot(addhealth.sub, aes(x = ExpectCollegeNum))
p <- p + geom_histogram(binwidth = .5, colour = "red", alpha = .4)
p <- p + geom_rug()
p <- p + geom_hline(data = est.mean.Ex, aes(xintercept = ExpectCollegeNum, colour = "red"))
p <- p + facet_grid(HighParenCollConcern ~ .)
p <- p + labs(y = "Count of Students", x = "Expectation to Attend College", title = "College Expectation \n by High Parental College Concern")
print(p)

## ------------------------------------------------------------------------
t.result <- t.test(addhealth.sub$ExpectCollegeNum, conf.level = 0.95)  #$
t.result
t.summary.Ex <- t.test(ExpectCollegeNum ~ HighParenCollConcern, addhealth.sub)
t.summary.Ex

## ------------------------------------------------------------------------
aov.summary <-aov(ExpectCollegeNum ~ Studen, data = addhealth.sub)
aov.summary
#bc.summary <- boxcox(aov.summary, lambda = seq(-2,2,0.1), plotit = TRUE)
#install.packages("boxCox")
#help(boxCox) BoxCox Package not available for R 3.2.2

## ---- cache = TRUE-------------------------------------------------------
p <- ggplot(addhealth.sub, aes(x = Studen, y = ExpectCollegeNum))
p <- p + geom_hline(yintercept = mean(addhealth.sub$ExpectCollegeNum),
                    colour = "black", linetype = "dashed", size = 0.3, alpha = 0.5)
# boxplot, size=.75 to stand out behind CI
p <- p + geom_violin(width = 0.5, alpha = 0.25)
p <- p + geom_boxplot(width = 0.25, alpha = 0.25)
# points for observed data
p <- p + geom_point(position = position_jitter(w = 0.05, h = 0), alpha = 0.2)
# diamond at mean for each group
p <- p + stat_summary(fun.y = mean, geom = "point", shape = 18, size = 4,
                      colour = "red", alpha = 0.8)
# confidence limits based on normal distribution
p <- p + stat_summary(fun.data = "mean_cl_normal", geom = "errorbar",
                      width = .2, colour = "red", alpha = 0.8)
p <- p + labs(title = "College Expectation vs Student Type") +
          ylab("College Expectation") + xlab("Student Type")
print(p)

## ------------------------------------------------------------------------
fit.c <- aov(ExpectCollegeNum ~ Studen, data = addhealth.sub)
summary(fit.c)

## ---- cache = TRUE-------------------------------------------------------
# Plot the data using ggplot
df.residual <- data.frame(res = aov.summary$residuals)
library(ggplot2)
p <- ggplot(df.residual, aes(x = res))
p <- p + geom_histogram(aes(y = ..density..), binwidth = 0.2, colour = "white")
p <- p + geom_density(colour = "blue")
p <- p + geom_rug()
p <- p + stat_function(fun = dnorm, colour = "red", arg = list(mean = mean(addhealth.sub$ExpectCollegeNum), sd = sd(addhealth.sub$ExpectCollegeNum)))
p <- p + labs(title = "ANOVA Residuals", x = "Residuals", y = "Density")
print(p)

## ------------------------------------------------------------------------
# QQ plot
#library(ggplot2)
#install.packages("car")
#library(car)
#par(mfrow=c(1,1))
#qqPlot(aov.summary$residuals, las = 1, id.n = 0, id.cex = 1, lwd = 1, main="QQ Plot")
#Previous line will not knit due to $ operator will not with atomic vector...

## ---- cache = TRUE-------------------------------------------------------
shapiro.test(fit.c$residuals)
#install.packages("nortest")
library(nortest)
ad.test(fit.c$residuals)
cvm.test(fit.c$residuals)

## ---- cache = TRUE-------------------------------------------------------
# calculate summaries 
library(plyr)
addhealth.sub.summary <- ddply(addhealth.sub, "RaceEth",
     function(X) { data.frame( m = mean(X$ExpectCollegeNum),
                              s = sd(X$ExpectCollegeNum),
                               n = length(X$ExpectCollegeNum) ) } )
addhealth.sub.summary

## ---- cache = TRUE-------------------------------------------------------
## Test equal variance
# assumes populations are normal
bartlett.test(ExpectCollegeNum ~ ParenConcernMean, data = addhealth.sub)

# does not assume normality, requires car package
library(car)
leveneTest(ExpectCollegeNum ~ ParenConcernMean, data = addhealth.sub)

# nonparametric test
fligner.test(ExpectCollegeNum ~ ParenConcernMean, data = addhealth.sub)

## ---- cache = TRUE-------------------------------------------------------
## Add Health
# Tukey 95% Individual p-values
TukeyHSD(fit.c)

## ------------------------------------------------------------------------
### Observed, group = 4
# observed proportions
## High Concern,Not Work  Low Concern,Not Work     High Concern,Work      Low Concern,Work 
#          0.34005954            0.07707575            0.49454185            0.08832286
obs.Studen <- table(addhealth.sub$Studen)
obs.Studen
obs.tableStuden <- prop.table(obs.Studen)

# probability of any particular social-cultural situation, by race
prop.RaceEth <- table(addhealth.sub$RaceEth)
prop.RaceEth
prop.tableExpect <- prop.table(prop.RaceEth)
prop.tableExpect
#     White      Black     Native      Asian       Latino 
# 0.59957627  0.16991525  0.04957627  0.05338983  0.12754237  
p  <- 0.5996 ## Looking at Majority students
p1 <- 0.1275 ## Looking at Latino Students
# Expected proportion for each student group
exp.prop <- rep(NA, 4)
exp.prop[1] <- pnbinom(0, 4, p) + pnbinom(0, 4, 1 - p)
exp.prop[2] <- (pnbinom(1, 4, p) - pnbinom(0, 4, p)) + (pnbinom(1, 4, 1 - p) - pnbinom(0, 4, 1 - p))
exp.prop[3] <- (pnbinom(2, 4, p) - pnbinom(1, 4, p)) + (pnbinom(2, 4, 1 - p) - pnbinom(1, 4, 1 - p))
exp.prop[4] <- 1 - pnbinom(2, 4, p) - pnbinom(2, 4, 1 - p)
signif(exp.prop, 3)
# checking that the proportions sum to 1
sum(exp.prop)
# Expected number of student groups
exp.Studen <- sum(obs.Studen) * exp.prop

round(exp.Studen, 1)

# p1... ^^ p versus p1 >> >>
exp.prop1 <- rep(NA, 4)
exp.prop1[1] <- pnbinom(0, 4, p1) + pnbinom(0, 4, 1 - p1)
exp.prop1[2] <- (pnbinom(1, 4, p1) - pnbinom(0, 4, p1)) + (pnbinom(1, 4, 1 - p1) - pnbinom(0, 4, 1 - p1))
exp.prop1[3] <- (pnbinom(2, 4, p1) - pnbinom(1, 4, p1)) + (pnbinom(2, 4, 1 - p1) - pnbinom(1, 4, 1 - p1))
exp.prop1[4] <- 1 - pnbinom(2, 4, p1) - pnbinom(2, 4, 1 - p1)
signif(exp.prop1, 3)
# checking that the proportions sum to 1
sum(exp.prop1)
# Expected number of student groups
exp.Studen1 <- sum(obs.Studen) * exp.prop1
round(exp.Studen1, 1)

summary(exp.Studen)
summary(exp.Studen1) # exp.prop1, exp.Studen1

## ------------------------------------------------------------------------
frame.Studen <- data.frame(n.Studen = factor(names(obs.Studen))
                  , obs = as.numeric(obs.Studen)
                  , exp = exp.Studen
                  , exp.prop = exp.prop
                    )
str(frame.Studen)
frame.Studen
# p1... ^^ p versus p1 >> >>
frame.Studen1 <- data.frame(n.Studen1 = factor(names(obs.Studen))
                  , obs = as.numeric(obs.Studen)
                  , exp = exp.Studen1
                  , exp.prop = exp.prop1
                    )
str(frame.Studen1)
frame.Studen1

## ------------------------------------------------------------------------
# calculate chi-square goodness-of-fit test
x.summary <- chisq.test(frame.Studen$obs, correct = FALSE, p = frame.Studen$exp.prop)
# print result of test
x.summary
# use names(x.summary) to find the statistic and p.value objects to print in text below
#                      replace 000 below with the object correct
# p1... ^^p versus p1 >> >>
x.summary1 <- chisq.test(frame.Studen1$obs, correct = FALSE, p = frame.Studen1$exp.prop)
# print result of test
x.summary1

## ------------------------------------------------------------------------
# use output in x.summary and create table
x.table <- data.frame(n.Studen = frame.Studen$n.Studen
                    , obs = x.summary$observed
                    , exp = x.summary$expected
                    , res = x.summary$residuals
                    , chisq = x.summary$residuals^2
                    , stdres = x.summary$stdres)
x.table
# p1... ^^ p versus p1 >>
x.table1 <- data.frame(n.Studen1 = frame.Studen1$n.Studen1
                    , obs = x.summary1$observed
                    , exp = x.summary1$expected
                    , res = x.summary1$residuals
                    , chisq = x.summary1$residuals^2
                    , stdres = x.summary1$stdres)
x.table1

## ---- fig.width = 8, fig.height = 8--------------------------------------
library(reshape2)
x.table.obsexp <- melt(x.table,
              # id.vars: ID variables
              #   all variables to keep but not split apart on
              id.vars = c("n.Studen"),
              # measure.vars: The source columns
              #   (if unspecified then all other variables are measure.vars)
              measure.vars = c("obs", "exp"),
              # variable.name: Name of the destination column identifying each
              #   original column that the measurement came from
              variable.name = "stat",
              # value.name: column name for values in table
              value.name = "value"
            )
x.table.obsexp
# p1... ^^ p versus p1 >> >>
x.table.obsexp1 <- melt(x.table1,
              # id.vars: ID variables
              #   all variables to keep but not split apart on
              id.vars = c("n.Studen1"),
              # measure.vars: The source columns
              #   (if unspecified then all other variables are measure.vars)
              measure.vars = c("obs", "exp"),
              # variable.name: Name of the destination column identifying each
              #   original column that the measurement came from
              variable.name = "stat",
              # value.name: column name for values in table
              value.name = "value"
              )
x.table.obsexp1
# Observed vs Expected counts
library(ggplot2)
p <- ggplot(x.table.obsexp, aes(x = n.Studen, fill = stat, weight=value))
p <- p + geom_bar(position="dodge")
p <- p + labs(title = "Observed and Expected Frequencies", x = "High Pa Concern-Not Working,LC-NW,HC-W,LC-W\n Four Student Categories", y = "frequencies - Majority")
print(p)
# p1... ^^ p versus p1 >> >>
p1 <- ggplot(x.table.obsexp1, aes(x = n.Studen1, fill = stat, weight=value))
p1 <- p1 + geom_bar(position="dodge")
p1 <- p1 + labs(title = "Observed and Expected Frequencies", x = "HC-NW,LC-NW,HC-W,LC-W\n Four Student Categories", y = "frequencies - Latino")
print(p1)

library(gridExtra)
grid.arrange(p, p1, nrow=1)
 # Contribution to chi-sq
# pull out only the n.Studen and chisq columns
x.table.chisq <- x.table[, c("n.Studen", "chisq")]
# reorder the n.Studen categories to be descending relative to the chisq statistic
x.table.chisq$n.Studen <- with(x.table, reorder(n.Studen, -chisq))
# p1... ^^ p versus p1 >> >>
x.table.chisq1 <- x.table1[, c("n.Studen1", "chisq")]
# reorder the n.Studen categories to be descending relative to the chisq statistic
x.table.chisq1$n.Studen1 <- with(x.table1, reorder(n.Studen1, -chisq))


p3 <- ggplot(x.table.chisq, aes(x = n.Studen, weight = chisq))
p3 <- p3 + geom_bar(alpha = .15)
p3 <- p3 + labs(title = "Contribution to Chi-sq statistic")
p3 <- p3 + xlab("Sorted n.Studen")
p3 <- p3 + ylab("Chi-sq - Majority")
print(p3)
# p1... ^^ p versus p1 >> >>
p4 <- ggplot(x.table.chisq1, aes(x = n.Studen1, weight = chisq))
p4 <- p4 + geom_bar(alpha = .15)
p4 <- p4 + labs(title = "Contribution to Chi-sq statistic")
p4 <- p4 + xlab("Sorted n.Studen1")
p4 <- p4 + ylab("Chi-sq - Latino")
print(p4)
library(gridExtra)
grid.arrange(p, p1,p3,p4, nrow=2)

## ------------------------------------------------------------------------
b.sum1 <- binom.test(frame.Studen$obs[1], sum(frame.Studen$obs), p = frame.Studen$exp.prop[1], alternative = "two.sided", conf.level = 1-0.05/4)
b.sum2 <- binom.test(frame.Studen$obs[2], sum(frame.Studen$obs), p = frame.Studen$exp.prop[2], alternative = "two.sided", conf.level = 1-0.05/4)
b.sum3 <- binom.test(frame.Studen$obs[3], sum(frame.Studen$obs), p = frame.Studen$exp.prop[3], alternative = "two.sided", conf.level = 1-0.05/4)
b.sum4 <- binom.test(frame.Studen$obs[4], sum(frame.Studen$obs), p = frame.Studen$exp.prop[4], alternative = "two.sided", conf.level = 1-0.05/4)
# put the p-value and CI into a data.frame
b.sum  <- data.frame(
            rbind( c(b.sum1$p.value, b.sum1$conf.int)
                 , c(b.sum2$p.value, b.sum2$conf.int)
                 , c(b.sum3$p.value, b.sum3$conf.int)
                 , c(b.sum4$p.value, b.sum4$conf.int)
            )
          )
names(b.sum) <- c("p.value", "CI.lower", "CI.upper")
b.sum$n.Studen <- frame.Studen$n.Studen
b.sum$Observed <- x.table$obs/sum(x.table$obs)
b.sum$exp.prop <- frame.Studen$exp.prop
b.sum

## ------------------------------------------------------------------------
# Observed vs Expected proportions
library(ggplot2)
p <- ggplot(b.sum, aes(x = n.Studen, y = Observed))
# observed
p <- p + geom_point(size = 4)
p <- p + geom_line(aes(group = 1))
p <- p + geom_errorbar(aes(ymin = CI.lower, ymax = CI.upper), width = 0.1)
# expected
p <- p + geom_point(aes(y = exp.prop), colour = "red", shape = "x", size = 6)
p <- p + geom_line(aes(y = exp.prop, group = 1), colour = "red")
p <- p + labs(title = "Observed (w/98.75% CI) and Expected (red x) proportions")
p <- p + xlab("Student Type")
p <- p + expand_limits(y = 0)
print(p)

## ------------------------------------------------------------------------
# Tabulate by two categorical variables:
tab.ExpectCollegeWorking <- xtabs(~ ExpectCollege + Working, data = addhealth.sub)
tab.ExpectCollegeWorking

# column proportions
prop.table(tab.ExpectCollegeWorking, margin = 2)

## ------------------------------------------------------------------------
chisq.gg <- chisq.test(tab.ExpectCollegeWorking, correct=FALSE)
chisq.gg
  # names(chisq.gg) for the objects to report

## ------------------------------------------------------------------------
# table of expected frequencies:
chisq.gg$expected
# smallest expected frequency:
min(chisq.gg$expected)

## ------------------------------------------------------------------------
# The Pearson residuals
chisq.gg$residuals
# The sum of the squared residuals is the chi-squared statistic:
chisq.gg$residuals^2
sum(chisq.gg$residuals^2)

## ------------------------------------------------------------------------
# mosaic plot
#install.packages("vcd")
library(vcd)
mosaic(tab.ExpectCollegeWorking, shade=TRUE, legend=TRUE)
# this layout gives us the interpretation we want:
mosaic(~ ExpectCollege + Working, data = addhealth.sub, shade=TRUE, legend=TRUE, direction = "v")

## ------------------------------------------------------------------------
# Tabulate by two categorical variables:
tab.ExpectCollegeStuden <- xtabs(~ ExpectCollege + Studen, data = addhealth.sub)
tab.ExpectCollegeStuden

# column proportions
prop.table(tab.ExpectCollegeStuden, margin = 2)

## ------------------------------------------------------------------------
chisq.es <- chisq.test(tab.ExpectCollegeStuden, correct=FALSE)
chisq.es
  # names(chisq.ga) for the objects to report

## ------------------------------------------------------------------------
# table of expected frequencies:
chisq.es$expected
# smallest expected frequency:
min(chisq.es$expected)

## ------------------------------------------------------------------------
# The Pearson residuals
chisq.es$residuals
# The sum of the squared residuals is the chi-squared statistic:
chisq.es$residuals^2
sum(chisq.es$residuals^2)

## ------------------------------------------------------------------------
# mosaic plot
#install.packages("vcd")
library(vcd)
mosaic(tab.ExpectCollegeStuden, shade=TRUE, legend=TRUE)
# this layout gives us the interpretation we want:
mosaic(~ ExpectCollege + Studen, data = addhealth.sub, shade=TRUE, legend=TRUE, direction = "v")

## ---- cache = TRUE-------------------------------------------------------
library(ggplot2)
p <- ggplot(addhealth.sub, aes(x = ParenConcernNum, y = ExpectCollegeNum))
# linear regression fit and confidence bands
p <- p + geom_smooth(method = lm, se = TRUE)
# jitter a little to uncover duplicate points
p <- p + geom_jitter(position = position_jitter(.1), alpha = 0.5, colour = "orange")
# separate for Race-Ethnicity
p <- p + facet_wrap(~ RaceEth, nrow = 1)
p <- p + labs(title="Regression of parental college concern \n and college expectation", y = "College Expectation", x = "Parental Concern")
p

## ---- cache = TRUE, fig.width = 10, fig.height = 12----------------------
p1 <- ggplot(addhealth.sub, aes(x = Age, y = ParenConcernNum))
# linear regression fit and confidence bands
p1 <- p1 + geom_smooth(method = lm, se = TRUE)
# jitter a little to uncover duplicate points
p1 <- p1 + geom_jitter(position = position_jitter(.1), alpha = 0.05, colour = "orange")
# separate for Race-Ethnicity
p1 <- p1 + facet_wrap(~ RaceEth, nrow = 1)
p1 <- p1 + labs(title="Regression of IV age \n and DV parental college concern", y = "Parental Concern", x = "Age")
#


p4 <- ggplot(addhealth.sub, aes(x = HoursWorked, y = ExpectCollegeNum))
# linear regression fit and confidence bands
p4 <- p4 + geom_smooth(method = lm, se = TRUE)
# jitter a little to uncover duplicate points
p4 <- p4 + geom_jitter(position = position_jitter(.1), alpha = 0.5, colour = "orange")
# separate for Females and Males
p4 <- p4 + facet_wrap(~ RaceEth, nrow = 1)
p4 <- p4 + labs(title="Regression of IV Hours Worked \n and DV college expectation", y = "College Expectation", x = "Hours Worked")
#


p2 <- ggplot(addhealth.sub, aes(x = ParenConcernNum, y = ExpectCollegeNum))
# linear regression fit and confidence bands
p2 <- p2 + geom_smooth(method = lm, se = TRUE)
# jitter a little to uncover duplicate points
p2 <- p2 + geom_jitter(position = position_jitter(.1), alpha = 0.5, colour = "orange")
# separate for Females and  Males
p2 <- p2 + facet_wrap(~ Sex, nrow = 1)
p2 <- p2 + labs(title="Regression of parental college concern \n and college expectation", y = "College Expectation", x = "Parental Concern")
#

p3 <- ggplot(addhealth.sub, aes(x = Age, y = ExpectCollegeNum))
# linear regression fit and confidence bands
p3 <- p3 + geom_smooth(method = lm, se = TRUE)
# jitter a little to uncover duplicate points
p3 <- p3 + geom_jitter(position = position_jitter(.1), alpha = 0.05, colour = "orange")
# separate for Females and Males
p3 <- p3 + facet_wrap(~ Sex, nrow = 1)
p3 <- p3 + facet_wrap(~ RaceEth, nrow = 1)
p3 <- p3 + labs(title="Regression of IV age \n and DV parental college concern", y = "College Expectation", x = "Age")
#

p4 <- ggplot(addhealth.sub, aes(x = HoursWorked, y = ExpectCollegeNum))
# linear regression fit and confidence bands
p4 <- p4 + geom_smooth(method = lm, se = TRUE)
# jitter a little to uncover duplicate points
p4 <- p4 + geom_jitter(position = position_jitter(.1), alpha = 0.5, colour = "orange")
# separate for Females and Males
p4 <- p4 + facet_wrap(~ RaceEth, nrow = 1)
p4 <- p4 + labs(title="Regression of IV Hours Worked \n and DV college expectation", y = "College Expectation", x = "Hours Worked")
#

p5 <- ggplot(addhealth.sub, aes(x = Age, y = HoursWorked))
# linear regression fit and confidence bands
p5 <- p5 + geom_smooth(method = lm, se = TRUE)
# jitter a little to uncover duplicate points
p5 <- p5 + geom_jitter(position = position_jitter(.1), alpha = 0.05, colour = "orange")
# separate for Females and Males
p5 <- p5 + facet_wrap(~ Sex, nrow = 1)
p5 <- p5 + labs(title="Regression of IV age \n and DV Hours Worked", y = "Hours Worked", x = "Age")
#
p6 <- ggplot(addhealth.sub, aes(x = Age, y = ExpectCollegeNum))
# linear regression fit and confidence bands
p6 <- p6 + geom_smooth(method = lm, se = TRUE)
# jitter a little to uncover duplicate points
p6 <- p6 + geom_jitter(position = position_jitter(.1), alpha = 0.05, colour = "orange")
# separate for Race-Ethnicity
p6 <- p6 + facet_wrap(~ RaceEth,  nrow = 1)
p6 <- p6 + labs(title="Regression of IV age \n and DV parental college concern", y = "Parental Concern", x = "Age")
#
p7 <- ggplot(addhealth.sub, aes(x = Age, y = ExpectCollegeNum))
# linear regression fit and confidence bands
p7 <- p7 + geom_smooth(method = lm, se = TRUE)
# jitter a little to uncover duplicate points
p7 <- p7 + geom_jitter(position = position_jitter(.1), alpha = 0.05, colour = "orange")
# separate for Race-Ethnicity
p7 <- p7 + facet_wrap(~ Sex,  nrow = 1)
p7 <- p7 + labs(title="Regression of IV age \n and DV parental college concern", y = "Parental Concern", x = "Age")

#
library(gridExtra)
grid.arrange( p1, p2, p3, p4, p5, p6, p7, nrow=4)

## ------------------------------------------------------------------------
# choose one:
#addhealth.sub.use <- subset(addhealth.sub, (Working == "Not Working"))
# addhealth.sub.use <- subset(addhealth.sub, (Working == "0"))
#summary(addhealth.sub.use)

## ------------------------------------------------------------------------
#summary(addhealth.sub.use$Age)
#addhealth.sub.use$Age_c <- addhealth.sub.use$Age - 1

## ------------------------------------------------------------------------
is.numeric(addhealth.sub$ParenConcernNum)
addhealth.sub$addhealth.sub$ParenConcernNum <- as.numeric(addhealth.sub$ParenConcernNum)
is.numeric(addhealth.sub$ExpectCollegeNum)
addhealth.sub$ExpectCollegeNum <- as.numeric(addhealth.sub$ExpectCollegeNum)
# fit model
lm.fit <- lm(ExpectCollegeNum ~ ParenConcernNum, data = addhealth.sub)
summary(lm.fit)

## ------------------------------------------------------------------------
library(ggplot2)
str(addhealth.sub$ParenConcernNum)
p <- ggplot(addhealth.sub, aes(x = ParenConcernNum, y = ExpectCollegeNum))
p <- p + geom_vline(xintercept = 0, alpha = 0.25)
# prediction bands
p <- p + geom_ribbon(aes(ymin = predict(lm.fit, data.frame(ExpectCollegeNum)
                                        , interval = "prediction", level = 0.95)[, 2],
                         ymax = predict(lm.fit, data.frame(ExpectCollegeNum)
                                        , interval = "prediction", level = 0.95)[, 3],) 
                  , alpha=0.1, fill="darkgreen")
# linear regression fit and confidence bands
p <- p + geom_smooth(method = lm, se = TRUE)
# jitter a little to uncover duplicate points
p <- p + geom_jitter(position = position_jitter(.1), alpha = 0.75)
p <- p + labs(title = "Regression with confidence and prediction bands", x = "Parental Concern", y = "College Expectation")
print(p)


## ---- fig.width = 8, fig.height = 6--------------------------------------
# plot diagnistics
par(mfrow=c(2,3))
plot(lm.fit, which = c(1,4,6))

# residuals vs College Expectation
plot(addhealth.sub$ExpectCollegeNum, lm.fit$residuals, main="Residuals vs College Expectation")
  # horizontal line at zero
  abline(h = 0, col = "gray75")

# Normality of Residuals
library(car)
qqPlot(lm.fit$residuals, las = 1, id.n = 3, main="QQ Plot")

# # residuals vs order of data
# plot(lm.fit$residuals, main="Residuals vs Order of data")
#   # horizontal line at zero
#   abline(h = 0, col = "gray75")
hist(lm.fit$residuals, breaks=10, main="Residuals")

## ------------------------------------------------------------------------
# plot diagnistics
par(mfrow=c(1,2))

plot(influence(lm.fit)$hat, main="Leverages", type = "n")
text(1:nrow(addhealth.sub), influence(lm.fit)$hat, label=paste(1:nrow(addhealth.sub)))
  # horizontal line at zero
  abline(h = 3*2/82, col = "gray75")

plot(cooks.distance(lm.fit), main="Cook's Distances", type = "n")
text(1:nrow(addhealth.sub), cooks.distance(lm.fit), label=paste(1:nrow(addhealth.sub)))
  # horizontal line at zero
  abline(h = 1, col = "gray75")

## ------------------------------------------------------------------------
summary(lm.fit)

## ------------------------------------------------------------------------
predict(lm.fit, data.frame(ParenConcernNum = -1)
      , interval = "confidence", level = 0.95)
predict(lm.fit, data.frame(ParenConcernNum = -1)
      , interval = "prediction", level = 0.95)

## ------------------------------------------------------------------------
str(addhealth.sub.f)
summary(addhealth.sub.f$gradBA)
levels(addhealth.sub.f$gradBA)
gradBA <- ifelse(addhealth.sub.f$gradBA=="BA Grad", 1, 0)
addhealth.sub.f$gradBA <- gradBA
#addhealth.sub.f$gradBA <- as.numeric(addhealth.sub.f$gradBA)

summary(addhealth.sub.f$ExpectCollegeNum)
is.numeric(addhealth.sub.f$ExpectCollegeNum)
summary(addhealth.sub.f$ParenConcernMean)
is.numeric(addhealth.sub.f$ParenConcernMean)
addhealth.sub.f$ParenConcernMean <- as.numeric(addhealth.sub.f$ParenConcernMean)
is.numeric(addhealth.sub.f$ParenConcernMean)
is.numeric(addhealth.sub.f$gradBA)
is.numeric(addhealth.sub.f$HoursWorked)
table(addhealth.sub.f$HoursWorked)
addhealth.sub.f$HoursWorked[addhealth.sub.f$HoursWorked == 0] <- NA
dim(addhealth.sub.f)
addhealth.sub.f <-na.omit(addhealth.sub.f)
dim(addhealth.sub.f)

# assign to a data frame
#summary(addhealth.sub.f$ExpectCollegeNum)
#df.ExpectCollegeNum.gradBA <- data.frame(ExpectCollegeNum = addhealth.sub.f$ExpectCollegeNum
#                        , gradBA = addhealth.sub.f$gradBA)
# assign to a data frame
summary(addhealth.sub.f$HoursWorked)
df.HoursWorked.gradBA <- data.frame(HoursWorked = addhealth.sub.f$HoursWorked
                        , gradBA = addhealth.sub.f$gradBA)
str(df.HoursWorked.gradBA)
# plot histograms for each condition and fit a logistic curve
# install.packages("popbio")
library(popbio)
#summary(df.ExpectCollegeNum.gradBA$gradBA)
summary(df.HoursWorked.gradBA$HoursWorked)

#logi.hist.plot(df.ExpectCollegeNum.gradBA$ExpectCollegeNum, df.ExpectCollegeNum.gradBA$gradBA
#              , logi.mod = 1 # logistic fit
#              , type = "hist", rug = FALSE, boxp = FALSE
#      
#              , col = "gray"
#              , mainlabel = "Probability Graduating College \n given varying College Expectation"
#              , ylabel = "Probability Graduate College (red)"
#              #, ylabel2 = "Frequency"
#              , xlabel = "College Expectation")
logi.hist.plot(df.HoursWorked.gradBA$HoursWorked, df.HoursWorked.gradBA$gradBA
              , logi.mod = 1 # logistic fit
              , type = "hist", rug = FALSE, boxp = FALSE
      
              , col = "gray"
              , mainlabel = "Probability Graduating College \n given varying HoursWorked Growing Up"
              , ylabel = "Probability Graduate College (red)"
              #, ylabel2 = "Frequency"
              , xlabel = "HoursWorked")
  # Note (11/1/2015):
  # there's a bug in the plotting function
  #   (I've emailed the package maintainer and it's been fixed in the next update)
  # if the boxplots are on (boxp=TRUE), then both ylabels are ylabel2.
#?logi.hist.plot

## ------------------------------------------------------------------------
library(plyr)
#df.ExpectCollegeNum.gradBA.sum <- ddply(df.ExpectCollegeNum.gradBA, "ExpectCollegeNum", summarise
#                        , Total = length(gradBA)
#                        , Success = sum(gradBA)
#                        )
df.HoursWorked.gradBA.sum <- ddply(df.HoursWorked.gradBA, "HoursWorked", summarise
                        , Total = length(gradBA)
                        , Success = sum(gradBA)
                        )
# create estimated proportion of preg for each age group
#df.ExpectCollegeNum.gradBA.sum$p.hat <- df.ExpectCollegeNum.gradBA.sum$Success / df.ExpectCollegeNum.gradBA.sum$Total
df.HoursWorked.gradBA.sum$p.hat <- df.HoursWorked.gradBA.sum$Success / df.HoursWorked.gradBA.sum$Total

#df.ExpectCollegeNum.gradBA.sum
df.HoursWorked.gradBA.sum

## ------------------------------------------------------------------------
#library(ggplot2)
#p <- ggplot(df.ExpectCollegeNum.gradBA.sum, aes(x = ExpectCollegeNum, y = p.hat))
#p <- p + geom_point(aes(size = Total))
#p <- p + geom_smooth(se = FALSE, colour = "red", aes(weight = Total))  # just for reference
#p <- p + expand_limits(y = 0) + expand_limits(y = 1)
#p <- p + labs(title = "Observed probability of college graduation")
#print(p)
library(ggplot2)
p <- ggplot(df.HoursWorked.gradBA.sum, aes(x = HoursWorked, y = p.hat))
p <- p + geom_point(aes(size = Total), color = "brown")
p <- p + geom_point(position = position_jitter(width=0.3), colour = "orange")
p <- p + geom_smooth(se = FALSE, colour = "red", aes(weight = Total))  # just for reference
p <- p + expand_limits(y = 0) + expand_limits(y = 1)
p <- p + labs(title = "Observed probability of college graduation")
print(p)

## ------------------------------------------------------------------------
#summary()
# emperical logits
#df.ExpectCollegeNum.gradBA.sum$emp.logit <- log((    df.ExpectCollegeNum.gradBA.sum$p.hat + 0.5/df.ExpectCollegeNum.gradBA.sum$Total) /
#                                 (1 - df.ParenConcernMean.gradBA.sum$p.hat + 0.5/df.ParenConcernMean.gradBA.sum$Total))
#
df.HoursWorked.gradBA.sum$emp.logit <- log((    df.HoursWorked.gradBA.sum$p.hat + 0.5/df.HoursWorked.gradBA.sum$Total) /
                                 (1 - df.HoursWorked.gradBA.sum$p.hat + 0.5/df.HoursWorked.gradBA.sum$Total))
#p <- ggplot(df.ExpectCollegeNum.gradBA.sum, aes(x = ExpectCollegeNum, y = emp.logit))
#p <- p + geom_point(aes(size = Total))
#p <- p + stat_smooth(method = "lm", se = FALSE, aes(weight = Total))  # just for reference
#p <- p + geom_smooth(se = FALSE, colour = "red", aes(weight = Total))  # just for reference
#p <- p + labs(title = "Empirical logits")
#print(p)
library(ggplot2)
p <- ggplot(df.HoursWorked.gradBA.sum, aes(x = HoursWorked, y = emp.logit))
p <- p + geom_point(aes(size = Total), color = "red")
p <- p + geom_point(position = position_jitter(width=0.3), colour = "orange")
p <- p + stat_smooth(method = "lm", se = FALSE, aes(weight = Total))  # just for reference
p <- p + geom_smooth(se = FALSE, colour = "red", aes(weight = Total))  # just for reference
p <- p + labs(title = "Empirical logits")
print(p)

## ------------------------------------------------------------------------
# For our summarized data (with frequencies and totals for each age)
# The left-hand side of our formula binds two columns together with cbind():
#   the columns are the number of "successes" and "failures".
# For logistic regression with logit link we specify family = binomial,
#   where logit is the default link function for the binomial family.

# first-order linear model
#glm.p.a <- glm(cbind(Success, Total - Success) ~ ExpectCollegeNum, family = binomial, df.ExpectCollegeNum.gradBA.sum)
glm.p.a <- glm(cbind(Success, Total - Success) ~ HoursWorked, family = binomial, df.HoursWorked.gradBA.sum)

## ---- echo=FALSE---------------------------------------------------------
# # Note that this method where every observation is distinct
# #   gives the same parameter estimates,
# #   but the deviance statistic for assessing lack-of-fit is not correct
# #   because it treats every observation as a "category" rather than each age category.
# # Above, using the summarized data gives the appropriate lack-of-fit test.
#glm.p.a <- glm(EverPreg ~ AgeAtVag, family = binomial, df.piv.preg)
#summary(glm.p.a)
#
# ## INCORRECT FOR UNSUMMARIZED DATA
# # Test residual deviance for lack-of-fit (if > 0.10, little-to-no lack-of-fit)
# glm.p.a$deviance
# glm.p.a$df.residual
# dev.p.val <- 1 - pchisq(glm.p.a$deviance, glm.p.a$df.residual)
# dev.p.val

## ------------------------------------------------------------------------
# Test residual deviance for lack-of-fit (if > 0.10, little-to-no lack-of-fit)
glm.p.a$deviance
glm.p.a$df.residual
dev.p.val <- 1 - pchisq(glm.p.a$deviance, glm.p.a$df.residual)
dev.p.val
#

## ------------------------------------------------------------------------
# put the fitted values in the data.frame
#df.ExpectCollegeNum.gradBA.sum$fitted.values <- glm.p.a$fitted.values
#pred <- predict(glm.p.a, data.frame(ExpectCollegeNum = df.ExpectCollegeNum.gradBA.sum$ExpectCollegeNum), type = "link", se.fit = TRUE) #$
#df.ExpectCollegeNum.gradBA.sum$fitted.values <- glm.p.a$fitted.values
#pred <- predict(glm.p.a, data.frame(ExpectCollegeNum = df.ExpectCollegeNum.gradBA.sum$ExpectCollegeNum), type = "link", se.fit = TRUE) #$
df.HoursWorked.gradBA.sum$fitted.values <- glm.p.a$fitted.values
pred <- predict(glm.p.a, data.frame(HoursWorked = df.HoursWorked.gradBA.sum$HoursWorked), type = "link", se.fit = TRUE) #$

#df.ExpectCollegeNum.gradBA.sum$fit     <- pred$fit
#df.ExpectCollegeNum.gradBA.sum$se.fit  <- pred$se.fit
df.HoursWorked.gradBA.sum$fit     <- pred$fit
df.HoursWorked.gradBA.sum$se.fit  <- pred$se.fit
# CI for fitted values
#df.ExpectCollegeNum.gradBA.sum <- within(df.ExpectCollegeNum.gradBA.sum, {
#  fit.lower = exp(fit - 1.96 * se.fit) / (1 + exp(fit - 1.96 * se.fit))
#  fit.upper = exp(fit + 1.96 * se.fit) / (1 + exp(fit + 1.96 * se.fit))
#  })
df.HoursWorked.gradBA.sum <- within(df.HoursWorked.gradBA.sum, {
  fit.lower = exp(fit - 1.96 * se.fit) / (1 + exp(fit - 1.96 * se.fit))
  fit.upper = exp(fit + 1.96 * se.fit) / (1 + exp(fit + 1.96 * se.fit))
  })

## ------------------------------------------------------------------------
# plot on probability scale
#library(ggplot2)
#p <- ggplot(df.ExpectCollegeNum.gradBA.sum, aes(x = ExpectCollegeNum, y = p.hat))
# predicted curve and point-wise 95% CI
#p <- p + geom_ribbon(aes(x = ExpectCollegeNum, ymin = fit.lower, ymax = fit.upper), colour = "blue", linetype = 0, alpha = 0.2)
#p <- p + geom_line(aes(x = ExpectCollegeNum, y = fitted.values), colour = "blue", size = 1)
# fitted values
#p <- p + geom_point(aes(y = fitted.values), colour = "blue", size=2)
# observed values
#p <- p + geom_point(aes(size = Total), color = "black")
#p <- p + expand_limits(y = 0) + expand_limits(y = 1)
#p <- p + labs(title = "Observed and predicted College Graduation, probability scale")
#print(p)
#
p <- ggplot(df.HoursWorked.gradBA.sum, aes(x = HoursWorked, y = p.hat))
# predicted curve and point-wise 95% CI
p <- p + geom_ribbon(aes(x = HoursWorked, ymin = fit.lower, ymax = fit.upper), colour = "blue", linetype = 0, alpha = 0.2)
p <- p + geom_line(aes(x = HoursWorked, y = fitted.values), colour = "blue", size = 1)
# fitted values
p <- p + geom_point(aes(y = fitted.values), colour = "blue", size=2)
# observed values
p <- p + geom_point(aes(size = Total), color = "brown")
p <- p + geom_point(position = position_jitter(width=0.3), colour = "orange")
p <- p + expand_limits(y = 0) + expand_limits(y = 1)
p <- p + labs(title = "Observed and predicted College Graduation, probability scale")
print(p)

## ------------------------------------------------------------------------
# plot on logit scale
#library(ggplot2)
#p <- ggplot(df.ExpectCollegeNum.gradBA.sum, aes(x = ExpectCollegeNum, y = emp.logit))
# predicted curve and point-wise 95% CI
#p <- p + geom_ribbon(aes(x = ExpectCollegeNum, ymin = fit - 1.96 * se.fit, ymax = fit + 1.96 * se.fit), linetype = 0, alpha = 0.2)
#p <- p + geom_line(aes(x = ExpectCollegeNum, y = fit), colour = "blue", size = 1)
# fitted values
#p <- p + geom_point(aes(y = fit), colour = "blue", size=2)
# observed values
#p <- p + geom_point(aes(size = Total), color = "black")
#p <- p + labs(title = "Observed and predicted Graduation, logit scale")
#print(p)
#
p <- ggplot(df.HoursWorked.gradBA.sum, aes(x = HoursWorked, y = emp.logit))
# predicted curve and point-wise 95% CI
p <- p + geom_ribbon(aes(x = HoursWorked, ymin = fit - 1.96 * se.fit, ymax = fit + 1.96 * se.fit), linetype = 0, alpha = 0.2)
p <- p + geom_line(aes(x = HoursWorked, y = fit), colour = "blue", size = 1)
# fitted values
p <- p + geom_point(aes(y = fit), colour = "blue", size=2)
# observed values
p <- p + geom_point(aes(size = Total), color = "brown")
p <- p + geom_point(position = position_jitter(width=0.3), colour = "orange")
p <- p + labs(title = "Observed and predicted Graduation, logit scale")
print(p)

## ------------------------------------------------------------------------
#subset(df.ExpectCollegeNum.gradBA.sum, ExpectCollegeNum == 2)
subset(df.HoursWorked.gradBA.sum, HoursWorked == 30)

## ---- cache = TRUE-------------------------------------------------------
#summary(glm.p.a)
summary(glm.p.a)
  # see names(summary(glm.p.a)) to find the object that has the coefficients.
  # can also use coef(glm.p.a)

## ---- cache = TRUE, fig.width = 8, fig.height = 8------------------------
library(ggplot2)
a <- ggplot(data = addhealth.sub, aes(x = Sex))
a <- a + geom_bar(binwidth = 1, alpha = .15, color = "purple")
a <- a + labs(title = "Gender", x = "Sex")

b <- ggplot(data = addhealth.sub, aes(x = RaceEth))
b <- b + geom_bar(binwidth = 1, alpha = .15, color = "purple")
b <- b + labs(title = "Race-Ethnicity Count", x = "Race-Ethnicity")

c <- ggplot(data = addhealth.sub, aes(x = Working))
c <- c + geom_bar(binwidth = 1, alpha = .15, color = "purple")
c <- c + labs(title = "Working Status", x = "Working Status")

d <- ggplot(data = addhealth.sub, aes(x = Age))
d <- d + geom_bar(binwidth = .5, alpha = .15, color = "purple")
d <- d + labs(title = "Age", x = "Age")

e <- ggplot(data = addhealth.sub, aes(x = HoursWorkedCat))
e <- e + geom_bar(binwidth = 5, alpha = .15, color = "purple")
e <- e + labs(title = "Hours Worked", x = "Hours Worked", y = "purple")

f <- ggplot(data = addhealth.sub, aes(x = ParenConcernMean))
f <- f + geom_bar(binwidth = 1, alpha = .15, color = "purple")
f <- f + labs(title = "Parental \nCollege Concern", x = "Parental \n College Concern", y = "count")

g <- ggplot(data = addhealth.sub.f, aes(x = HighParenCollConcern))
g <- g + geom_bar(binwidth = 1, alpha = .15, color = "purple")
g <- g + labs(title = "High Parental \n College Concern", x = "High Parental \n College Concern gt 3.5", y = "count")

h <- ggplot(data = addhealth.sub, aes(x = ExpectCollegeNum))
h <- h + geom_bar(binwidth = 1, alpha = .15, color = "purple")
h <- h + labs(title = "Expectation \n to Attend College", x = "Expectation \n to Attend College", y = "count")

i <- ggplot(data = addhealth.sub, aes(x = Studen))
i <- i + geom_bar(binwidth = 1, alpha = .15, color = "purple")
i <- i + labs(title = "Student Type \n high/low concern /nWorking, not Working
              ", x = "Student type", y = "count")

j <- ggplot(data = addhealth.sub.f, aes(x = education))
j <- j + geom_bar(binwidth = 1, alpha = .15, color = "purple")
j <- j + labs(title = "Education Level, \n Interval 1-13", x = "Education Level, 1=<HS, 13=PdD", y = "count")

k <- ggplot(data = addhealth.sub.f, aes(x = gradBA))
k <- k + geom_bar(binwidth = 1, alpha = .15, color = "purple")
k <- k + labs(title = "Graduated BA College", x = "Graduated BA College", y = "count")

l <- ggplot(data = addhealth.sub.f, aes(x = gradHS))
l <- l + geom_bar(binwidth = 1, alpha = .15, color = "purple")
l <- l + labs(title = "Graduated high school", x = "Graduated high school", y = "count")
library(gridExtra)
grid.arrange(a, b, c, d, e, f, g, h, i, j, k, l, nrow=4)

## ---- cache = TRUE-------------------------------------------------------
# fit the simple linear regression model Expectation regressed on hours worked
lm.ExpectCollegeNum.HoursWorked <- lm(ExpectCollegeNum ~ HoursWorked, data = addhealth.sub)
# use summary() to parameters estimates (slope, intercept) and other summaries
#summary(lm.ExpectCollegeNum.HoursWorked)
#addhealth.sub.latinomale <- addhealth.sub
#addhealth.sub.latinomale[LatinoMale ==]
library(ggplot2)
p5 <- ggplot(addhealth.sub, aes(x = HoursWorked, y = ExpectCollegeNum))
p5 <- p5 + geom_point(position = position_jitter(width=0.5), colour = "pink")
p5 <- p5 + stat_smooth(method = lm, se = FALSE) +  theme_bw()
p5 <- p5 + facet_wrap(Sex ~ RaceEth)
p5 <- p5 + labs(x = "Hours Worked", y = "Expectation to Attend College", title = "Hours Worked and Expectation to attend College,\n by Gender and Age")
print(p5)

## ------------------------------------------------------------------------
t.summary.Ex <- t.test(ExpectCollegeNum ~ HighParenCollConcern, addhealth.sub)
t.summary.Ex

## ---- cache = TRUE-------------------------------------------------------
library(ggplot2)
g1 <- ggplot(data = addhealth.sub, aes(x = Sex, fill = ExpectCollege)) +
  geom_bar(position = "fill") +
  theme_bw()
g1 <- g1 + facet_wrap(~RaceEth)
g1 <- g1 + labs(x = "Gender", y = "Proportion", title = "College Expectation comparing Males and Females, by Race") +
  scale_fill_discrete(name="College \nExpectation") 
g1
g1 <- ggplot(data = addhealth.sub, aes(x = Sex, fill = ExpectCollege)) +
  geom_bar(position = "fill") +
  theme_bw()
g1 <- g1 + facet_wrap(~Studen)
library(ggplot2)
p <- ggplot(addhealth.sub, aes(x = HighParenCollConcern, y = ExpectCollegeNum))
p <- p + geom_boxplot(width = 0.5, alpha = 0.5)
p <- p + geom_jitter(position = position_jitter(width = 0.1), alpha = 1/2, colour = "orange")
# diamond at mean for each group
p <- p + stat_summary(fun.y = mean, geom = "point", shape = 18, size = 6, colour = "purple", alpha = 0.8)
p <- p + labs(x = "Parental College Concern", y = "Expectation to attend College", title = "College Expectation \n by Parental College Concern")
print(p)

library(ggplot2)
p2 <- ggplot(addhealth.sub, aes(x = Age, y = ExpectCollegeNum))
p2 <- p2 + geom_point(position = position_jitter(width=0.3), colour = "orange")
p2 <- p2 + stat_smooth(method = lm, se = FALSE) +  theme_bw()
p2 <- p2 + facet_wrap(Working ~ RaceEth)
p2 <- p2 + labs(title = "Age and College Expectation,\n by Working Status and Race", x= "Age", y = "College Expectation")
print(p2)

library(ggplot2)
p <- ggplot(addhealth.sub, aes(x = HoursWorked, y = ExpectCollegeNum))
p <- p + geom_jitter(position = position_jitter(width = 0.3), alpha = 1/4, color = "red")
p <- p + stat_smooth(method = lm)
p <- p + labs(x = "Hours Worked", y = "Expectation to Attend College", title = "Confidence Interval of Hours Worked\n and Expectation to Attend College")
#print(p)
library(ggplot2)
px <- ggplot(addhealth.sub, aes(x = Studen, y = ExpectCollegeNum))
px <- px + geom_boxplot(width = 0.5, alpha = 0.5)
px <- px + geom_jitter(position = position_jitter(width = 0.1), alpha = .5, colour = "red")
# diamond at mean for each group
px <- px + stat_summary(fun.y = mean, geom = "point", shape = 18, size = 6, colour = "blue", alpha = 0.8)
px <- px + labs(x = "Parental College Concern", y = "Expectation to attend College", title = "College Expectation \n by Parental College Concern")
#print(px)
library(ggplot2)
pxx <- ggplot(addhealth.sub, aes(x = StudenLat, y = ExpectCollegeNum))
pxx <- pxx + geom_boxplot(width = 0.5, alpha = 0.8)
pxx <- pxx + geom_jitter(position = position_jitter(width = 0.1), alpha = .8, colour = "red")
# diamond at mean for each group
pxx <- pxx + stat_summary(fun.y = mean, geom = "point", shape = 18, size = 6, colour = "blue", alpha = 0.8)
pxx <- pxx + labs(x = "Parental College Concern", y = "Expectation to attend College", title = "College Expectation  by 1)High/Low Parental College Concern, HC/LC\n2)Working/Not Working, W/NW, 3)Majority/Latino-Male 'LM'")
#print(px)
library(gridExtra)
grid.arrange(pxx, nrow=1)
#
library(ggplot2)
p <- ggplot(x.table.obsexp, aes(x = n.Studen, fill = stat, weight=value))
p <- p + geom_bar(position="dodge")
p <- p + labs(title = "Observed and Expected Frequencies", x = "High Pa Concern-Not Working,LC-NW,HC-W,LC-W\n Four Student Categories", y = "frequencies - Majority")
print(p)
# p1... ^^ p versus p1 >> >>
p1 <- ggplot(x.table.obsexp1, aes(x = n.Studen1, fill = stat, weight=value))
p1 <- p1 + geom_bar(position="dodge")
p1 <- p1 + labs(title = "Observed and Expected Frequencies", x = "HC-NW,LC-NW,HC-W,LC-W\n Four Student Categories", y = "frequencies - Latino")
print(p1)

library(gridExtra)
grid.arrange(p, p1, nrow=1)

