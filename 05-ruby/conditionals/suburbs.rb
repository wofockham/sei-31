### 3. Sydney Suburbs
# - Create a program that asks what residences you live in.
# - Depending on the answer, print an appropriate response of your choosing

print "What suburb do you live in: "
residence = gets.chomp.capitalize

# case statement is kind of a case expression
puts case residence
when "Glebe"
  "Beautiful foreshore walk"
when "Five dock"
  "Cool gangland shooting"
when "Fairlight"
  "What a fancy name"
when "Cabramatta"
  "Fine dining. Also heroin"
else
  "I'm sure that's a lovely place"
end
