require 'pry'

def hello(name="World", adjective="cruel") # Variadic
  puts "Hello #{ adjective } #{ name }"
end

def add(a, b)
  puts "Thanks for using my add() method. I'm so proud."
  a + b # Implicit return: Ruby returns the value of the last line of code.
end

puts "The result is #{ add 5, 7 }"

# binding.pry # Equivalent to JS: debugger;

hello
hello()
