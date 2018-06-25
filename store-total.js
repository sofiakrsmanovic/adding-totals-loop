var salesNumbers = [141, 768, 904, 345, 123, 43];
var salesTotal = 0;

for (var i = 0; i < salesNumbers.length; i++)
{
	salesTotal = salesTotal + salesNumbers [i];
}
console.log ("My boutique sold a total of $" + salesTotal + " this week");
