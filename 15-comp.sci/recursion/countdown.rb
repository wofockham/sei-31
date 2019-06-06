def countdown_iterative(n=10)
  while n >= 0 # end condition
    puts n
    n -= 1 # mutation: move towards the end condition
    sleep 1
  end

  puts "Blast off"
end

def countdown_recursive(n=10)
  if n < 0 # end condition
    puts "Blast off" # base case
  else
    puts n
    sleep 1
    countdown_recursive n-1 # Move towards the base case
  end
end

require 'pry'
binding.pry
