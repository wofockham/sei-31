# 6. [8] Extra credit exercise: write a program that prints out any input line that mentions both wilma and fred.

# A lot of people when faced with a problem think "I know, I'll use regular expressions".
# Now they have two problems.
# -- Jamie Zawinski (jwz)

# TODO: Look at extended regular expressions

ARGF.each do |line|
  puts line if line =~ /wilma/ && line =~ /fred/  # /(wilma.*fred|fred.*wilma)/
end
