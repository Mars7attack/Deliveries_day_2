let hamw = 0, tunaw = 0, vegiw = 0; //variables des nombres de chaque sandwich
while (breadCount >= 2 && hamCount >= 1) {
	hamw += 1
  breadCount -= 2
  hamCount -= 1
 }
 while (breadCount >= 2 && tunaCount >= 1 && tomatoCount >=2) {
	tunaw +=1
  breadCount -=2
  tunaCount -=1
  tomatoCount -=2
 }
  while (breadCount >= 2 && saladCount >= 1 && tomatoCount >=2) {
	vegiw += 1
  breadCount -= 2
  saladCount -= 1
  tomatoCount -= 2
 }
 displayIngredients()
