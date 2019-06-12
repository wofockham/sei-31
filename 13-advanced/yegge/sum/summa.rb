# Program to add all the integers from a file, one integer per line
# Non numeric and blank lines are effectively ignored.

integers = File.open 'integers.txt'

sum = 0

integers.each do |line|
  i = line.to_i
  sum += i
end

puts sum
