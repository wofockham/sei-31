### 1. Drinking age?
# - Ask the user for their age.
#     - Remember that anytime you get input, it is a string, so you will need to change the age input to a number.
# - If age is less than 18, print an appropriate message.
# - If the age is equal to or over 18, print a different message.

print "What is your age (enter a valid numerical response): "
age = gets.to_i

if age < 18
  puts "You are not old enough to drink so you'll have to be discrete. Try a park or a cemetery."
else
  puts "You are good to go, have one for me. Cheers cobber. Fuck yeah ANZACs."
end
